interface ButtonProps {
    text : string
}

import './custom-btn.css'

export const CustomBtn : React.FC<ButtonProps>= ({
    text
}) => {
    return ( 
        <button>
                <div className='container'>
                <span className="btn">{text}</span>
                <span className="btn1">{text}</span>
                </div>
        </button>
     );
}
