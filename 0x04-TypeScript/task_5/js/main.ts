// task_5/js/main.ts

// Define MajorCredits interface
interface MajorCredits {
    brand: 'major';
    credits: number;
}
  
  // Define MinorCredits interface
  interface MinorCredits {
    brand: 'minor';
    credits: number;
  }
  
  // Create two functions named sumMajorCredits and sumMinorCredits
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      brand: 'major',
      credits: subject1.credits + subject2.credits,
    };
  }
  
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      brand: 'minor',
      credits: subject1.credits + subject2.credits,
    };
  }
  
  // Example usage
  const majorSubject1: MajorCredits = { brand: 'major', credits: 3 };
  const majorSubject2: MajorCredits = { brand: 'major', credits: 4 };
  const minorSubject1: MinorCredits = { brand: 'minor', credits: 2 };
  const minorSubject2: MinorCredits = { brand: 'minor', credits: 1 };
  
  const resultMajor = sumMajorCredits(majorSubject1, majorSubject2);
  const resultMinor = sumMinorCredits(minorSubject1, minorSubject2);
  
  console.log(resultMajor); // Output: { brand: 'major', credits: 7 }
  console.log(resultMinor); // Output: { brand: 'minor', credits: 3 }
  