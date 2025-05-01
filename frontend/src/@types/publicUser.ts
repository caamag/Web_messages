export type PublicUserProps = {
  id: string;
  description: string;
  email: string;
  name: string;
  createdAt: string;
  photoURL: string;
  notification: PublicUserNotifications[];
};

export type PublicUserNotifications = {
  senderEmail: string;
  senderId: string;
  senderName: string;
  timestamp: string;
  photo: string;
};

export type UpdatePublicUserProps = {
  name: string | undefined;
  photoURL: string | undefined;
  description: string | undefined;
};
