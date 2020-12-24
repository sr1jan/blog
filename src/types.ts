export interface postDataProps {
  id: string;
  date: string;
  title: string;
  contentHtml?: string;
}

export interface postIdProps {
  params: {
    id: string;
  };
}
