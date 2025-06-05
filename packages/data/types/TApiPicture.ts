export type TPicture = {
  id: string;
  imageUrl: string;
  height: number;
  width: number;
};

type TApiPicture = {
  id: string;
  owner_id: string;
  url_token: string;
  width: number;
  height: number;
};

export type TApiProfileResponse = {
  pictures: TApiPicture[];
};
