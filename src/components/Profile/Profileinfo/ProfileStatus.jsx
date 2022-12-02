import React from 'react';
import style from './Profileinfo.module.css'


class ProfileStatus extends React.Component{
    state={
        editMode:false,
        status: this.props.status
    }
    activeEditMode = () =>{
        this.setState({
            editMode:true
        })
    }
    disabledEditMode = () =>{
        this.setState({
            editMode:false
        })
        this.props.updateStatus(this.state.status)
    }
    onChangeStatus = (e) => {
        this.setState({
            status: e.target.value
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.status !== this.props.status  ){
            this.setState({
                status:this.props.status
            })
        }
    }

    render() {
        return <div className={style.statusBlock}>
            <div>Status :</div>
            {!this.state.editMode && <div> <span className={style.status} onClick={this.activeEditMode.bind(this)}>{this.props.status || 'The status is missing'}</span></div>}
            {this.state.editMode && <div><input className={style.statusInput} autoFocus={true} value={this.state.status} onChange={this.onChangeStatus} onBlur={this.disabledEditMode.bind(this)} type="text"/></div>}
        </div>
    }
}

export default ProfileStatus;