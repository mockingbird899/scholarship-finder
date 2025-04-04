document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stops page refresh

    // Get all form values
    const county = document.getElementById('county').value;
    const state = document.getElementById('state').value;
    const ethnicity = document.getElementById('ethnicity').value;
    const gender = document.getElementById('gender').value;
    const firstGen = document.getElementById('firstGen').value;
    const veteran = document.getElementById('veteran').value;
    const gpa = document.getElementById('gpa').value;
    const major = document.getElementById('major').value;
    const minor = document.getElementById('minor').value;
    const gradYear = document.getElementById('gradYear').value;
    const year = document.getElementById('year').value;
    const honors = document.getElementById('honors').value;
    const orgs = document.getElementById('orgs').value;
    const orgList = document.getElementById('orgList').value;
    const career = document.getElementById('career').value;
    const employer = document.getElementById('employer').value;
    const gradSchool = document.getElementById('gradSchool').value;
    const fafsa = document.getElementById('fafsa').value;
    const efc = document.getElementById('efc').value;
    const employed = document.getElementById('employed').value;
    const job = document.getElementById('job').value;
    const workStudy = document.getElementById('workStudy').value;
    const dependents = document.getElementById('dependents').value;
    const activities = document.getElementById('activities').value;
    const leadership = document.getElementById('leadership').value;
    const volunteer = document.getElementById('volunteer').value;
    const disability = document.getElementById('disability').value;
    const underrepresented = document.getElementById('underrepresented').value;
    const underrepList = document.getElementById('underrepList').value;
    const languages = document.getElementById('languages').value;
    const talents = document.getElementById('talents').value;
    const talentList = document.getElementById('talentList').value;

    // Build a detailed prompt for Grok
    const prompt = `
        Find scholarships for a ${year} student living in ${county} County, ${state}. 
        Ethnicity: ${ethnicity}, Gender: ${gender || 'Not specified'}, 
        First-Generation: ${firstGen}, Veteran/Dependent: ${veteran}. 
        GPA: ${gpa}, Major: ${major}, Minor: ${minor || 'None'}, 
        Grad Year: ${gradYear}, Honors: ${honors || 'None'}, 
        Orgs: ${orgs} (${orgList || 'N/A'}). 
        Career Goal: ${career}, Employer: ${employer || 'N/A'}, 
        Grad School: ${gradSchool}. 
        FAFSA: ${fafsa}, EFC: ${efc}, Employed: ${employed} (${job || 'N/A'}), 
        Work-Study: ${workStudy}, Dependents: ${dependents}. 
        Activities: ${activities || 'None'}, Leadership: ${leadership || 'None'}, 
        Volunteer: ${volunteer || 'None'}. 
        Disability: ${disability}, Underrepresented: ${underrepresented} (${underrepList || 'N/A'}), 
        Languages: ${languages}, Talents: ${talents} (${talentList || 'N/A'}). 
        Exclude Ball State-specific and FAFSA options. List name, description, eligibility, award amount, link, and deadline.
    `;

    // Simulate Grok's response
    const fakeGrokResponse = simulateGrokResponse(prompt);
    
    // Show the results
    document.getElementById('resultsText').innerHTML = fakeGrokResponse;
});

// Fake Grok response function
function simulateGrokResponse(prompt) {
    return `
        <strong>Sample Scholarship:</strong><br>
        <strong>Name:</strong> Hispanic Scholarship Fund<br>
        <strong>Description:</strong> Supports Hispanic students pursuing higher education.<br>
        <strong>Eligibility:</strong> Hispanic heritage, 2.5+ GPA, enrolled full-time.<br>
        <strong>Award:</strong> $500-$5,000<br>
        <strong>Link:</strong> <a href="https://www.hsf.net">hsf.net</a><br>
        <strong>Deadline:</strong> February 15, 2026<br>
        <p>(Demo response based on: "${prompt}")</p>
    `;
}
