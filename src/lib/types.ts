export interface CloudinaryImage {
  id: string;
  title: string;
  url: string;
  width: number;
  height: number;
  format: string;
  public_id: string;
  tags: string[];
  context: {
    custom: {
      title: string;
    };
  };
}

export interface CloudinaryResource {
  asset_id: string;
  filename: string;
  secure_url: string;
  width: number;
  height: number;
  format: string;
  public_id: string;
  tags: string[];
  context: {
    custom: {
      title: string;
    };
  };
}
