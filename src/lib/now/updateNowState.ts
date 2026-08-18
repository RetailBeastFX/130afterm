import type { NowState } from '../../types/now';

/**
 * Fields that are allowed to be updated via Terminal.
 *
 * Lanyard-derived fields (playing, listening, watching) are intentionally
 * excluded — Lanyard is the authoritative source for those.
 *
 * ActivityEvent data is never touched by NowState updates.
 */
export const EDITABLE_FIELDS = [
  'building',
  'trading',
  'working_on',
  'mood',
  'location',
] as const;

export type EditableField = (typeof EDITABLE_FIELDS)[number];

export interface UpdateResult {
  success: boolean;
  error?: string;
  data?: Partial<NowState>;
}

/**
 * Validates a field/value pair before writing.
 * Returns an error string if invalid, undefined if valid.
 */
export function validateNowField(
  field: string,
  value: string
): string | undefined {
  if (!EDITABLE_FIELDS.includes(field as EditableField)) {
    return `Unknown field "${field}". Editable fields: ${EDITABLE_FIELDS.join(', ')}`;
  }
  if (!value || value.trim().length === 0) {
    return `Value cannot be empty.`;
  }
  if (value.length > 120) {
    return `Value too long. Max 120 characters.`;
  }
  return undefined;
}

/**
 * updateNowState — writes a partial NowState update to /api/now.
 *
 * Persistence flow:
 *   Terminal UI
 *     → updateNowState(field, value)
 *       → validates field is in EDITABLE_FIELDS
 *         → POST /api/now  (netlify/functions/now.ts)
 *           → Netlify Blobs (now_state store)
 *             → GET /api/now returns merged state
 *               → /now page reflects the change
 *
 * Only EDITABLE_FIELDS can be written.
 * Lanyard fields, Discord presence, and ActivityEvent data are never touched.
 *
 * @param field   - The NowState field to update (must be in EDITABLE_FIELDS)
 * @param value   - The new value (max 120 chars)
 * @param token   - Bearer token for /api/now auth (NOW_API_TOKEN env var)
 */
export async function updateNowState(
  field: EditableField,
  value: string,
  token: string,
  apiUrl = '/api/now'
): Promise<UpdateResult> {
  const validationError = validateNowField(field, value);
  if (validationError) {
    return { success: false, error: validationError };
  }

  try {
    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ [field]: value.trim() }),
    });

    if (res.status === 401) {
      return { success: false, error: 'Unauthorized. Check NOW_API_TOKEN.' };
    }
    if (!res.ok) {
      return { success: false, error: `API error ${res.status}` };
    }

    const result = await res.json();
    return { success: true, data: result.data };
  } catch (e) {
    return { success: false, error: (e as Error).message };
  }
}
