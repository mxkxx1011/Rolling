import "components/textfield/DropMenu.scss"

function DropMenu({options, clickEvent}) {
    return (
        <ul className="dropdown-menu">
            {options.map((option, index) => (
                <li key={index} onClick={()=>clickEvent(option)}>
                    {option}
                </li>
            ))}
        </ul>
    )
}

export default DropMenu;