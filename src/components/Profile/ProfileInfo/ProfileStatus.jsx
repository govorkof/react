import React from 'react'
import s from './ProfileInfo.module.css'


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

    render() {
        return (
            < div >
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode} >{this.props.status}</span>
                    </div>
                }
                {
                    this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
                    </div>
                }
            </div >
        )
    }
}

export default ProfileStatus