import stylse from './style.module.css'
import InnerTitle from './InnerTitle'

export default function Text(props){
    return (<>
    <InnerTitle InnerTitle="hfdjytfkjgkjygkj" />
        <div className={stylse.text}>{props.Text}</div>
        </>
    
    )
}