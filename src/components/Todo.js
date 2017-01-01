

const Todo = ({onCLick, completed, text}) => (
    <li
        onClick={onCLick}
        style={{textDecoration:completed?"line-through":"none"}}>
    </li>
)
