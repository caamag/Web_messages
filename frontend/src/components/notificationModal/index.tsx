import * as Css from "./style";
import { PublicUserNotifications } from "../../@types/publicUser";

//images
import { IoCloseCircle } from "react-icons/io5";
import ProfileUser from "../../assets/profile-user.png";
import { FaCheckCircle } from "react-icons/fa";

//components
import { Modal } from "../UI/modal";

interface NotificationModalProps {
  closeModal: () => void;
  notifications: PublicUserNotifications[];
}

const NotificationModal = ({
  closeModal,
  notifications,
}: NotificationModalProps) => {
  return (
    <Modal>
      <Css.NotificationContent>
        <Css.CloseBtn
          onClick={() => {
            closeModal();
          }}
        >
          <IoCloseCircle />
        </Css.CloseBtn>
        {notifications.map((notification) => (
          <Css.NotificationCard>
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
              <Css.RecuseBtn>
                <IoCloseCircle />
              </Css.RecuseBtn>
              <Css.AcceptBtn>
                <FaCheckCircle />
              </Css.AcceptBtn>
            </Css.NotificationBtns>
          </Css.NotificationCard>
        ))}
      </Css.NotificationContent>
    </Modal>
  );
};

export default NotificationModal;
