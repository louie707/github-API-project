class Github {
    constructor() {
      this.client_id = '2e10c56fb5d5054d2d08';
      this.client_secret = '563183ac56ec2d3482b223638e713efcf480ff8d';
      this.repos_count = 5;
      this.repos_sort = 'created asc';
    }
  
    async getUser(user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
      const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id${this.client_id}&client_secret=${this.client_secret}`);
      
      const profile = await profileResponse.json();
      const repos = await repoResponse.json();
      return {
        // profile: profile
        profile,
        repos
      };

      

    }
  }