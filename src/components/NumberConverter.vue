<template>
  <div>
    <b-container>
      <h1>Bin2Dec</h1>
      <p>Convert any Binary Number to Decimal Value</p>
      <b-row align-v="stretch">
        <b-col cols="7">
          <!-- Get User input -->
          <b-form-group id="input-binary" label-for="binary-number">
            <label class="d-flex align-items-center justify-content-start"
              >Enter Binary Number
            </label>
            <b-form-input
              id="binary-number"
              v-model="binaryValue"
              type="text"
              placeholder="01011101"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col class="d-flex align-items-end">
          <b-button @click="setconvertion">Convert</b-button>
        </b-col>
      </b-row>
      <!-- Validation message -->
      <p
        id="error-message"
        v-if="isError"
        class="d-flex align-items-center invalid-feedback justify-content-start"
      >
        Please Enter a valid binary digit(1/0) less than 8 digits
      </p>
      <div>
        <b-row v-if="decimalValue">
          <b-col>
            <h5 class="d-flex align-items-center justify-content-start" id="decimal-value">
              Decimal Value : {{ decimalValue }}
            </h5>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "NumberConverter",
  data() {
    return {
      isError: false,
      binaryValue: "",
      decimalValue: "",
    };
  },
  methods: {
    /**
     * Method to convert binary value to decimal
     */
    setconvertion() {
      //validation check
      this.getValidated(this.binaryValue);

      if (this.isError) {
        //reset the decimal value
        this.decimalValue = "";
        this.binaryValue = "";
        return;
      }

      //reset the isError check
      this.isError = false;

      //logic to get the string and convert to decimal
      this.decimalValue = this.binaryValue
        .split("")
        .reverse()
        .reduce(function (val, a, i) {
          return val + Math.pow(2, i) * a;
        }, 0);
    },

    /**
     * Method to validate input value
     * @param {String} value
     */
    getValidated(value) {
      //check if an empty value is entered
      if (value == "") {
        return (this.isError = true);
      }

      //check if its a binary value
      if (value && !value.match(/^[0-1]+$/g)) {
        return (this.isError = true);
      }

      return (this.isError = false);
    },
  },
};
</script>

<style>
</style>