export type PublicUserProps = {
  id: string;
  description: string;
  email: string;
  name: string;
  createdAt: string;
  photo: string;
};

export type UpdatePublicUserProps = {
  name: string | undefined;
  photoURL: string | undefined;
  description: string | undefined;
};
