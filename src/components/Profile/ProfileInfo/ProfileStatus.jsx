import React from 'react'
import s from './ProfileInfo.module.css'


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
    }

    activateEditMode() {
        this.setState({
            editMode: true, //показано как правильноделать
        })
        //this.forceUpdate()          //медот перерисовывания. Здесь нужен для перерисовывания компоненты, потому что state изменили, но страница сама не перерисуется
        // почему-то его нужно избегать и использовать в крайних случаях
    }

    deactivateEditMode() {
        this.setState({
            editMode: false,
        })
    }

    render() {
        return (
            < div >
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)} >{this.props.status}</span>
                    </div>
                }
                {
                    this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status} />
                    </div>
                }
            </div >
        )
    }
}

export default ProfileStatus