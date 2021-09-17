import React, {useState} from "react";
import Preloader from "../../common/preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatus";
import userPhoto from "../../../assets/images/default_avatar.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {

  let [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />;
  }

  const mainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(
      () => {
        setEditMode(false);
      }
    )
  };

  return (
    <>
      {/* <div className={s["main-content__page-img"]}> */}
      <div>
        <img className={s["main-photo"]} src={props.profile.photos.large || userPhoto}/>
        { props.isOwner && <input type={"file"} onChange={mainPhotoSelected}/>}
      </div>
      <div className={s.wrap}>
        <div className={s["main-content__avatar"]}>
          <div className={s["main-content__about-user"]}>
            <h3 className={s["main-content__about-user-name"]}>
              {props.profile.fullName}
            </h3>
            <ProfileStatusWithHooks
              status={props.status}
              updateStatus={props.updateStatus}
            />
            { editMode 
            ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} /> 
            : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={props.profile} isOwner={props.isOwner}/>}
          </div>
        </div>
      </div>
    </>
  );
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return <div>
    { isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
    <div>
      <p className={s["main-content__about-user-short"]}>
      {profile.aboutMe}</p>
    </div>
    <div>
     <p className={s["main-content__about-user-short"]}>
      {profile.lookingForAJobDescription}
     </p>
    </div>
    <div>About work: {profile.lookingForAJob ? "i want eat" : "im good"}</div>
    <div>
      <p className={s["main-content__about-user-short"]}>
        Contacts: {Object.keys(profile.contacts).map(key => {
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        })}
      </p>
    </div>
  </div>
}

const Contact = ({contactTitle, contactValue}) => {
  return <div>{contactTitle}: {contactValue}</div>
}

export default ProfileInfo;
