interface Link {
    title: string;
    url: string;
    type: {
      key: string;
    };
  }
  
  interface AuthorRole {
    author: {
      key: string;
    };
    type: {
      key: string;
    };
  }
  
  interface DateTime {
    type: string;
    value: string;
  }
  
  export interface BookdetailDto {
    description: string;
    links: Link[];
    title: string;
    covers: number[];
    first_publish_date: string;
    key: string;
    authors: AuthorRole[];
    type: {
      key: string;
    };
    subjects: string[];
    lc_classifications: string[];
    latest_revision: number;
    revision: number;
    created: DateTime;
    last_modified: DateTime;
  }