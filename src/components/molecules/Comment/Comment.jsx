import styles from './Comment.module.scss';

/**
 * A Figma comment: the pin with the author's initials and the text bubble.
 * @param {{ initials: string, title: string, text: string }} props
 */
export default function Comment({ initials, title, text }) {
  return (
    <li className={styles.comment} data-component="molecules/Comment">
      <span className={styles.pin} aria-hidden="true">
        {initials}
      </span>
      <div className={styles.bubble}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
      </div>
    </li>
  );
}
