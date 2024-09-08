declare global {
  namespace Apis {
    namespace Resume {
      interface Get {
        id: string;
        applicantName: string;
        jobPosition: string;
        uploadDate: number;
        status: 'pending' | 'accepted' | 'rejected';
        url: string;
      }
    }
  }
}

export {};
