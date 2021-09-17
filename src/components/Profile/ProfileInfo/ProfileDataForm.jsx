import React from "react";
import {createField, Input, Textarea} from "../../common/FormControls/FormControls";
import Contact from "./ProfileInfo";
import s from "./ProfileInfo.module.css";
import { reduxForm } from "redux-form";
import f from "../../common/FormControls/formControls.module.css";

const ProfileDataForm = ({profile, handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
        <div>
            {error && <div className={f.formSummaryError}>{error}</div>}
        </div>
        <div>
            {createField("FullName", "fullName", [], Input)}
            <p className={s["main-content__about-user-short"]}>
            {profile.aboutMe}</p>
            {createField("about me", "aboutMe", [], Textarea)}
        </div>
        <div>
            <p className={s["main-content__about-user-short"]}>
            desc {profile.lookingForAJobDescription}
            {createField("my skills", "lookingForAJobDescription", [], Textarea)}
            </p>
        </div>
        <div>About work: {profile.lookingForAJob}
            {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
        </div>
        <div>
            <p className={s["main-content__about-user-short"]}>
                Contacts: {Object.keys(profile.contacts).map(key => {
                return <div key={key}>
                    {key}: {createField(key, "contacts." + key, [], Input)}
                </div>
                })}
            </p>
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;