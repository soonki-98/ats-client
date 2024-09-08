declare global {
  namespace Apis {
    namespace Resume {
      interface Get {
        id: string;
        applicantName: string;
        jobPosition: string;
        uploadDate: number;
        status: string;
        url: string;
      }
    }
  }
}

export {};
