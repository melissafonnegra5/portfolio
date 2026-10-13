import styles from './Button.module.scss';

/**
 * Link styled as a button.
 * @param {{ href: string, variant?: 'primary' | 'secondary', children: React.ReactNode }} props
 */
export default function Button({ href, variant = 'primary', children, ...rest }) {
  return (
    <a
      href={href}
      className={`${styles.button} ${styles[variant]}`}
      data-component="atoms/Button"
      {...rest}
    >
      {children}
    </a>
  );
}
