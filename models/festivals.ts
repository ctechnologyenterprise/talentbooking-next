export type Festival = {
  name?: string;
  date?: string;
  category?: string;
  genre?: string;
  promoter?: string;
  contact?: string;
  isConfirmed?: boolean;
  isCancelled?: boolean;
  isPending?: boolean;
};

export type UCFestivalItems = {
  name?: string;
  date?: string;
  isPending?: boolean;
  isCancelled?: boolean;
  isConfirmed?: boolean;
};
