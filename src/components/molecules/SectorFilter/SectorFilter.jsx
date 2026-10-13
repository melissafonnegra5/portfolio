import Cursor from '@/components/atoms/Cursor';
import styles from './SectorFilter.module.scss';

/**
 * Botones de filtro por sector (controlados por quien lo usa).
 * @param {{
 *   sectors: { key: string, label: string }[],
 *   value: string,
 *   onChange: (key: string) => void,
 *   label: string,
 *   nudge?: { name: string, chat: string } | null,
 * }} props
 */
export default function SectorFilter({ sectors, value, onChange, label, nudge }) {
  return (
    <div className={styles.filters} role="group" aria-label={label} data-component="molecules/SectorFilter">
      {sectors.map((s) => (
        <button
          key={s.key}
          type="button"
          className={styles.filter}
          aria-pressed={value === s.key}
          onClick={() => onChange(s.key)}
        >
          {s.label}
        </button>
      ))}
      {/* Invitación a probar los filtros */}
      {nudge && (
        <span className={styles.nudge}>
          <Cursor name={nudge.name} color="orange" chat={nudge.chat} />
        </span>
      )}
    </div>
  );
}
