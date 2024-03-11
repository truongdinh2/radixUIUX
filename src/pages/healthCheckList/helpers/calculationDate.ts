export const isMoreThanNDaysBeforeExam = (examDate: string, numOfDate: number) => {
  const currentDate = new Date();
  let examDateTmp;
  if (typeof examDate === 'string') {
    examDateTmp = new Date(examDate);
  }

  if (examDateTmp) {
    // Calculate the difference in milliseconds between currentDate and examDate
    const timeDifference = currentDate.getTime() - examDateTmp.getTime();

    // Convert milliseconds to days
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

    // Check if the difference is greater than 7 days
    return daysDifference > numOfDate;
  }
  return null;
};
