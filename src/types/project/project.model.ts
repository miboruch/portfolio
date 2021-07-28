export interface ProjectModel {
  id: number;
  name: string;
  description: string;
  period: string;
  technology: string;
  status: string;
  category: string;
  platform: string;
  image?: any;
}

export interface ProjectImage {
  projectId: number;
  images: {
    image1: any;
    image2: any;
    image3?: any;
  };
}
