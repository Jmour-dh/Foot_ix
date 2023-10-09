import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styles from "./Profile.module.scss"
import ProfileNav from './components/ProfileNav/ProfileNav'

function Profile ()  {
  return (
    <div className={`d-flex flex-fill p-20 ${styles.container}`}>
      <ProfileNav/>
      <div className="d-flex flex-column flex-fill">
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}

export default Profile
