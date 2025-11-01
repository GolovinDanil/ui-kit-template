import {ButtonHTMLAttributes, DetailedHTMLProps, FC} from "react";

import styles from './styles.module.css'

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button: FC<ButtonProps> = (props) => {
    return <button {...props} className={styles.button} />
}

export type { ButtonProps }
export default Button
