$(document).ready(() => {
  $("#appointmentfor").on("click", event => {
    event.preventDefault();
    console.log(`${event.target.id}`);
  });
  const serviceView = $("#appointmentfor");
  const stylistView = $("#time");

  const getStylist = async () => await $.get("/api/stylist");
  const displayStylists = async response => {
    const stylistPromise = Promise.resolve(response);
    const stylistJSON = await stylistPromise;
    stylistJSON.forEach(stylist => {
      stylistView.append(
        `<option value="${stylist.stylistName}">${stylist.stylistName}</option>`
      );
    });
    console.log(stylistJSON);
  };
  displayStylists(getStylist());

  const getService = async () => await $.get("/api/services");
  const displayServices = async response => {
    const servicePromise = Promise.resolve(response);
    const serviceJSON = await servicePromise;
    serviceJSON.forEach(service => {
      serviceView.append(
        `<option id="${service.id}" value="${service.description}">${service.description}</option>`
      );
    });
    console.log(serviceJSON);
  };
  displayServices(getService());

  // const bookAppointment
});
