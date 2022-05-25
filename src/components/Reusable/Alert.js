import { Icon, Text } from './'

const Alert = ({ children, type }) => {

    return (
        <div className={`pos-absolute tr-1 flx flx-min-center alert-size-s ${type === 'error' ? 'bg-err' : 'bg-success'} pd-xs`}>

            <Icon classes='icon-secondary mg-right-s'>
                {type === 'error' ? 'error' : 'check_circle'}
            </Icon>

            <Text classes='txt-md txt-600 txt-cap txt-secondary'>{children}</Text>

        </div>
    )
}

export default Alert