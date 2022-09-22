import styles from "../../styles/todo.module.css";

function Button(props) {
  return (
    <span>
      <button
        disabled={props.disabled}
        className={styles.button}
        onClick={props.onClick}
      >
       {props.children}
      </button>
    </span>
  );
}

export default Button;
