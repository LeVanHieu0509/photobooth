export interface ListResponse<T> {
  data: {
    list: T[];
    meta: {
      pagination: {
        page: number;
        pageCount: number;
        pageSize: number;
        total: number;
      };
    };
  };
}

export interface MetaPagination {
  pagination: {
    page: number;
    pageCount: number;
    pageSize: number;
    total: number;
  };
}
export interface IResponse<T> {
  id: string;
  attributes: T;
}

export interface MediaAttributesOutput {
  attributes: {
    url: string;
    formats: {
      large: {
        url: string;
      };
      medium: {
        url: string;
      };
      small: {
        url: string;
      };
      thumbnail: {
        url: string;
      };
    };
  };
}

export interface MediaOutput {
  data: MediaAttributesOutput;
  [key: number]: MediaOutput;
}

// ------------------------------------------ //

export interface TopicOutput {
  slug: string;
  title: string;
}

export interface BlogOutput {
  title: string;
  cover_img: MediaOutput;
  content: string;
  release_date: string;
  slug: string;
  description: string;
  topics: { data: IResponse<TopicOutput>[] };
  tags: string;
  related_blogs: {
    data: IResponse<BlogOutput>[];
  };
  __typename: string;
}

export interface AuthorOutput {
  __typename: string;
  name: string;
  self_description: string;
  avatar: MediaOutput;
  self_short_description: string;
  self_bio: string;
  socials: {
    __typename: string;
    social_linkedin_link: string;
    social_facebook_link: string;
    social_twitter_link: string;
    social_instgram_link: string;
  };
}

export interface QAsOutput {
  question: string;
  answer: string;
}

export interface HomeownerOutput {
  name: string;
  description: string;
  sallary: string;
  location: string;
  image: MediaOutput;
}

export interface HousekeeperOutput {
  name: string;
  description: string;
  sallary: string;
  location: string;
  image: MediaOutput;
}
