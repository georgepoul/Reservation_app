import classes from './Alert.module.css';

function Alert(props) {
    return (
        <div className={`${classes.alert} ${classes[props.type]}`}>
            {props.message}
        </div>
    );
}

export default Alert;