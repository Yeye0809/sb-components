
import './Mylabel.css';

export interface LabelProps {
  /**
   * Este es el mensaje a mostrar
   */
  label: string,
  /**
   * Este es el tamaño por defecto
   */
  size: 'normal' | 'h1' | 'h2' | 'h3',
  /**
   * capitalizar texto
   */
  allCaps?: boolean,
  /**
   * color del texto
   */
  color?: 'primary' | 'secondary' | 'tertiary',
  /**
   * Color de la fuente
   */
  fontColor?: string,
  /**
   * Color fondo de la fuente
   */
  backgroundColor?: string,

}

export const MyLabel = ({
  allCaps = false,
  color = 'primary',
  label= 'no hay label', 
  size='normal',
  fontColor,
  backgroundColor= 'transparent'
}:LabelProps) => {
  return (
    <span className={`label ${size} `}
    style={{ color: fontColor, backgroundColor }}>
      {
        (allCaps) ? label.toUpperCase() : label
      }
      
    </span>
  )
}

