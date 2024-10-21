export function createTimeTable(data) {
  let weekdays, saturday, sunday;

  if (data.timeTable) {
    weekdays = data.timeTable.weekdays
      ? `L-V ${data.timeTable.weekdays[0]} `
      : "";
    saturday = data.timeTable.saturday
      ? `S ${data.timeTable.saturday[0]} `
      : "";
    sunday = data.timeTable.sunday ? `D ${data.timeTable.sunday[0]} ` : "";
  } else {
    return "Sin informacion";
  }

  return `${weekdays} ${saturday} ${sunday}`;
}

export function createAddress(data) {
  return `${data.street} ${data.number} ${data.neighborhood}`;
}

export const result = [
  {
    centerName: "Citas Full Pereira",
    country: "Colombia",
    city: "Pereira",
    street: "Calle 14",
    neighborhood: "Sector Invico",
    apt: "Clinica Dentus",
    number: "#13-32",
    timeTable: {
      saturday: ["08:00-17:00"],
      weekdays: ["08:00-17:00"],
    },
    calendarId: 7964022,
    centerType: "Centro Aliado",
    zone: "Pereira",
    whatsAppLink: "https://api.whatsapp.com/send?phone=5215593312948&text=%C2%A1Quiero%20agendar%20una%20cita%20en%20San%20Luis%20Potos%C3%AD!",
    promo: "¡Hasta $5,000 de descuento!",
    services: {
      fullprimera: {
        productId: "fullprimera",
        AppointmentTypeId: "53474599",
      },
      fullseguimiento: {
        productId: "fullseguimiento",
        AppointmentTypeId: "53474627",
      },
    },
  },
  {
    centerName: "Polanco Full",
    country: "México",
    city: "Miguel Hidalgo",
    street: "Lafontaine",
    neighborhood: "Polanco III Secc -Piso 4 Consultorio 2 y 3.",
    apt: "Piso 4, consultorio 2-3",
    number: "73",
    timeTable: {
      saturday: ["10:00-18:00"],
      weekdays: ["10:00-18:00"],
    },
    calendarId: 8713409,
    embed:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30100.19443303747!2d-99.221701!3d19.4329489!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f9c8b3925e39%3A0x95f70ed06b617ff2!2sMoons!5e0!3m2!1ses-419!2smx!4v1693872970078!5m2!1ses-419!2smx" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    centerType: "Centro Moons",
    zone: "Polanco",
    whatsAppLink: "https://api.whatsapp.com/send?phone=5215593312948&text=%C2%A1Quiero%20agendar%20una%20cita%20en%20San%20Luis%20Potos%C3%AD!",
    promo: "¡Hasta $5,000 de descuento!",
    services: {
      fullprimera: {
        productId: "fullprimera",
        AppointmentTypeId: "53474599",
      },
      fullseguimiento: {
        productId: "fullseguimiento",
        AppointmentTypeId: "53222904",
      },
      refinamiento: {
        productId: "refinamiento",
        AppointmentTypeId: "53222633",
      },
      futura: {
        productId: "futura",
        AppointmentTypeId: "53251573",
      },
      fullrecolocacion: {
        productId: "fullrecolocacion",
        AppointmentTypeId: "61326435",
      },
      nmt_rx: {
        productId: "nmt_rx",
        AppointmentTypeId: "60959916",
      },
      limpiezaplan: {
        productId: "limpiezaplan",
        AppointmentTypeId: "53352668",
      },
      limpiezayblanqplan: {
        productId: "limpiezayblanqplan",
        AppointmentTypeId: "53352699",
      },
      rescan: {
        productId: "rescan",
        AppointmentTypeId: "53251554",
      },
      nmt60: {
        productId: "nmt60",
        AppointmentTypeId: "56487210",
      },
      fullfinal: {
        productId: "fullfinal",
        AppointmentTypeId: "55967546",
      },
    },
  },
];
