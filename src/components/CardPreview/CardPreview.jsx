import '../../sass/components/CardPreview/cardPreview.scss'

function Form() {

    return (
        <div className='Card-bg flex basis-2/6 min-h-full'>
            <div className="w-full h-full flex flex-col">
                <div className="Card-front text-white">
                    <div className="Card-logo">
                        <svg width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"/></svg>
                    </div>
                    <div className="Card-num">
                        <p>000000000000000000</p>
                    </div>
                    <div className="Card-name">
                        <p>Jane</p>
                    </div>
                    <div className="Card-date">
                        <p>00 / 00</p>
                    </div>
                </div>
                <div className="Card-back">
                    <p className='CVC-num'>000</p>
                </div>
            </div>
        </div>
    )
}

export default Form