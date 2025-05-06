import * as Css from "./style";
import { PublicUserNotifications } from "../../@types/publicUser";

//images
import { IoCloseCircle } from "react-icons/io5";
import ProfileUser from "../../assets/profile-user.png";
import { FaCheckCircle } from "react-icons/fa";

//components
import { Modal } from "../UI/modal";
import Loader from "../loader";

interface NotificationModalProps {
  closeModal: () => void;
  notifications: PublicUserNotifications[];
  recuse: (senderId: string) => void;
  loading: boolean;
}

const NotificationModal = ({
  notifications,
  ...props
}: NotificationModalProps) => {
  return (
    <Modal>
      <Css.NotificationContent>
        <Css.CloseBtn
          onClick={() => {
            props.closeModal();
          }}
        >
          <IoCloseCircle />
        </Css.CloseBtn>
        {notifications.map((notification) => (
          <Css.NotificationCard>
            {props.loading ? (
              <Loader />
            ) : (
              <>
                <Css.SenderData>
                  {" "}
                  <Css.SenderPhoto src={notification.photo ?? ProfileUser} />
                  <Css.SenderDescription>
                    {notification.senderName}
                    <br />
                    {notification.senderEmail}
                  </Css.SenderDescription>
                </Css.SenderData>

                <Css.NotificationBtns>
                  <Css.RecuseBtn
                    onClick={async () => {
                      props.recuse(notification.senderId);
                    }}
                  >
                    <IoCloseCircle />
                  </Css.RecuseBtn>
                  <Css.AcceptBtn>
                    <FaCheckCircle />
                  </Css.AcceptBtn>
                </Css.NotificationBtns>
              </>
            )}
          </Css.NotificationCard>
        ))}
      </Css.NotificationContent>
    </Modal>
  );
};

export default NotificationModal;
