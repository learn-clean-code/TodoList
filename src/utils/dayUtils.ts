const dayUtils = () => {
      const date = new Date();
      const options:any = { weekday: 'long', day: 'numeric', month: 'long' };
      const formattedDate = date.toLocaleDateString('en-US', options).split(' ');
  
      const getDaySuffix = (day: number) => {
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
          case 1: return 'st';
          case 2: return 'nd';
          case 3: return 'rd';
          default: return 'th';
        }
      };
  
      const day = date.getDate();
      const daySuffix = getDaySuffix(day);

      const weekday = formattedDate[0];
      const month = formattedDate[1];
      const dayWithSuffix = `${day}${daySuffix}`;
  
      return {
        weekday,
        day: dayWithSuffix,
        month,
      };
    };
  
  
  export default dayUtils