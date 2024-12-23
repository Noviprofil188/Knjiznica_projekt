<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-table
        separator="horizontal"
        title="Popis rezerviranih knjiga"
        title-class="text-h4 text-bold text-red-9"
        :rows="reservations"
        :columns="columns"
        row-key="id"
        table-class="text-black"
        table-style="border: 3px solid black;"
        table-header-style="height: 65px"
        table-header-class="bg-red-2"
        bordered
        flat
        square
        :pagination="pagination"
      >
        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.label }}
            </q-th>
          </q-tr>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.value }}
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

const style1 = {
  fontSize: "18px",
};

const style2 = {
  fontSize: "24px",
};

const columns = [
  {
    name: "naslov",
    label: "Naslov",
    field: "naslov",
    align: "left",
    sortable: true,
    style: style1,
    headerStyle: style2,
  },
  {
    name: "autor",
    label: "Autor",
    field: "autor",
    align: "left",
    sortable: true,
    style: style1,
    headerStyle: style2,
  },
  {
    name: "korisnik",
    label: "Korisnik",
    field: "korisnik",
    align: "left",
    sortable: true,
    style: style1,
    headerStyle: style2,
  },
  {
    name: "datum_rezervacije",
    label: "Datum rezervacije",
    field: "datum_rezervacije",
    align: "center",
    sortable: true,
    style: style1,
    headerStyle: style2,
  },
];

export default {
  setup() {
    const reservations = ref([]);
    const pagination = ref({
      rowsPerPage: 10,
    });

    const loadReservations = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/rezervacija"
        );
        reservations.value = response.data || [];
      } catch (error) {
        console.error("Greška pri učitavanju rezervacija:", error);
      }
    };

    // Load reservations when the component is mounted
    loadReservations();

    return {
      columns,
      reservations,
      pagination,
    };
  },
};
</script>