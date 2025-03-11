export interface Img {
  src: string,
  alt: string
};

export interface AuthProps {
  SpecifiComponent: React.FC;
  option: boolean | null;
  adminRoute?: boolean | null;
}

