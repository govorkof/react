import React from 'react'


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true, //показано как правильноделать
        })
        //this.forceUpdate()          //медот перерисовывания. Здесь нужен для перерисовывания компоненты, потому что state изменили, но страница сама не перерисуется
        // почему-то его нужно избегать и использовать в крайних случаях
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {

        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {          //метод работает, когда компонента перерисовывется
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }


        console.log('componentDidUpdate')
    }

    render() {
        return (
            < div >
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode} >{this.props.status || '-----'}</span>
                    </div>
                }
                {
                    this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
                    </div>
                }
            </div >
        )
    }
}

export default ProfileStatus