interface PageHeaderProps {
  path: string[];
  title: string;
  subtitle?: string;
  stats?: { label: string; value: string }[];
}

export default function PageHeader({ path, title, subtitle, stats }: PageHeaderProps) {
  return (
    <div style={{ marginBottom: '48px' }}>
      {/* Breadcrumb */}
      <div
        style={{
          fontFamily: 'var(--font-jetbrains), monospace',
          fontSize: '11px',
          color: '#454550',
          marginBottom: '20px',
          letterSpacing: '0.05em',
          display: 'flex',
          gap: '6px',
          alignItems: 'center',
        }}
      >
        <span style={{ color: '#2A2A30' }}>130AfterM</span>
        {path.map((segment, i) => (
          <span key={i} style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            <span style={{ color: '#1E1E22' }}>/</span>
            <span style={{ color: i === path.length - 1 ? '#D4973B' : '#454550' }}>
              {segment}
            </span>
          </span>
        ))}
      </div>

      {/* Title */}
      <h1
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '32px',
          fontWeight: 300,
          color: '#E8E8E8',
          lineHeight: 1.2,
          letterSpacing: '-0.01em',
          marginBottom: subtitle ? '12px' : '0',
        }}
      >
        {title}
      </h1>

      {/* Subtitle */}
      {subtitle && (
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '15px',
            fontWeight: 300,
            color: '#8A8A95',
            lineHeight: 1.6,
            maxWidth: '540px',
          }}
        >
          {subtitle}
        </p>
      )}

      {/* Stats bar */}
      {stats && stats.length > 0 && (
        <div
          style={{
            marginTop: '24px',
            display: 'flex',
            gap: '0',
            flexWrap: 'wrap',
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                display: 'flex',
                gap: '8px',
                alignItems: 'baseline',
                paddingRight: '24px',
                marginRight: '24px',
                borderRight: i < stats.length - 1 ? '1px solid #1E1E22' : 'none',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-jetbrains), monospace',
                  fontSize: '11px',
                  color: '#454550',
                  letterSpacing: '0.08em',
                }}
              >
                {stat.label}:
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-jetbrains), monospace',
                  fontSize: '13px',
                  color: '#D4973B',
                }}
              >
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Divider */}
      <div
        style={{
          marginTop: '32px',
          height: '1px',
          background: '#1E1E22',
        }}
      />
    </div>
  );
}
