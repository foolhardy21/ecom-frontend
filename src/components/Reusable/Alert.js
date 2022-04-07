import { Icon, Text } from './'

const Alert = ({ classes, children, type }) => {

    return (
        <div className={`flx flx-maj-start flx-min-center ${classes} alert-size-s ${type === 'error' ? 'bg-err' : 'bg-success'} pd-xs mg-top-s`}>

            <Icon classes='icon-secondary mg-right-s'>
                {type === 'error' ? 'error' : 'check_circle'}
            </Icon>

            <Text classes='txt-md txt-600 txt-cap txt-secondary'>{children}</Text>

        </div>
    )
}

export default Alert