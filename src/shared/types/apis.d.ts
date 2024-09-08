declare global {
  namespace Apis {
    namespace Resume {
      interface Get {
        applicantName: string;
        jobPosition: string;
        uploadDate: string;
        status: string;
        url: string;
      }
    }
  }
}

export {};
