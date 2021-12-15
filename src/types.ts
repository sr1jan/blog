export interface postDataProps {
  id: string;
  date: string;
  title: string;
  description: string;
  image: string;
  contentHtml?: string;
}

export interface postIdProps {
  params: {
    id: string;
  };
}
