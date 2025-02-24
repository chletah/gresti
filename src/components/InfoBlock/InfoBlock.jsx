import './InfoBlock.css'

function InfoBlock()  {
    return (
        <div className="infoBlock">
            <div className="infoBlock__container">
                <div className="infoBlock__title">
                    My work is your best solution
                </div>
                <div className="infoBlock__subTitle">
                    First order <span className="subTitle__green">50%</span> discount
                </div>
                <div className="infoBlock__btns">
                    <div className="infoBlock__btnContact infoBlock__btn">Contact</div>
                    <div className="infoBlock__btnAboutMe infoBlock__btn">About me</div>
                </div>
            </div>
        </div>
    )
}

export default InfoBlock;