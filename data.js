// SB Tape Group - Coating Raw Material BI Data
// May 2026 = REAL data from ODS file
// April 2026 = DUMMY data for testing

const SBT_DATA = {
  months: {
    "2026-04": {
      label: "April 2026",
      locked: false,
      source: "dummy",
      records: [
        {
          micron: 23,
          color: "clear",
          width: 1550,
          length: 14000,
          customer: "LYRECO",
          itemNumber: "ZPBOPP23C155014",
          batchNumber: "LY2026040101-001",
          weightKg: 480,
          qtyInputM2: 21700,
          qtyOutputM2: 7200,
          productionNo: "ST19-000168100",
          configuration: "1550X4000",
          totalM2: 422000,
          batchNo: "STPD0027710",
          containerNo: "COSCO SHIPPING",
          shippingMark: "LY2026040100001",
          lotNumber: "TEMU1234567"
        },
        {
          micron: 24,
          color: "clear",
          width: 1610,
          length: 14600,
          customer: "SHURTAPE",
          itemNumber: "ZPBOPP24C161014",
          batchNumber: "ST2026040202-010",
          weightKg: 510,
          qtyInputM2: 23500,
          qtyOutputM2: 7600,
          productionNo: "ST19-000168250",
          configuration: "1595X4860",
          totalM2: 498000,
          batchNo: "STPD0027720",
          containerNo: "FOROP ADVANCED",
          shippingMark: "F10543-2604020001",
          lotNumber: "MSDU4411880"
        },
        {
          micron: 28,
          color: "brown",
          width: 1300,
          length: 15000,
          customer: "TESA",
          itemNumber: "ZPBOPP28B130015",
          batchNumber: "TS2026040303-005",
          weightKg: 625,
          qtyInputM2: 19500,
          qtyOutputM2: 6400,
          productionNo: "ST19-000168380",
          configuration: "1300X4500",
          totalM2: 351000,
          batchNo: "STPD0027740",
          containerNo: "EVERGREEN",
          shippingMark: "TS2026040300003",
          lotNumber: "EGHU7823410"
        },
        {
          micron: 24,
          color: "clear",
          width: 1280,
          length: 16150,
          customer: "ZHEJIANG JINRUI",
          itemNumber: "ZPBOPP24C128016A",
          batchNumber: "JR2026040404-002",
          weightKg: 345,
          qtyInputM2: 20650,
          qtyOutputM2: null,
          productionNo: "ST19-000168520",
          configuration: "1280X4000",
          totalM2: 88000,
          batchNo: "STPD0027755",
          containerNo: "ZHEJIANG JINRUI",
          shippingMark: "JR2026040400002",
          lotNumber: "TCKU6612990"
        },
        {
          micron: 30,
          color: "clear",
          width: 1620,
          length: 13000,
          customer: "HENKEL",
          itemNumber: "ZPBOPP30C162013",
          batchNumber: "HK2026040505-008",
          weightKg: 720,
          qtyInputM2: 21060,
          qtyOutputM2: 8100,
          productionNo: "ST19-000168670",
          configuration: "1620X5000",
          totalM2: 530000,
          batchNo: "STPD0027770",
          containerNo: "HAPAG-LLOYD",
          shippingMark: "HK2026040500008",
          lotNumber: "HLBU9900123"
        },
        {
          micron: 23,
          color: "brown",
          width: 1500,
          length: 14200,
          customer: "NITTO",
          itemNumber: "ZPBOPP23B150014",
          batchNumber: "NT2026040606-003",
          weightKg: 398,
          qtyInputM2: 21300,
          qtyOutputM2: 6800,
          productionNo: "ST19-000168800",
          configuration: "1500X4200",
          totalM2: 444000,
          batchNo: "STPD0027785",
          containerNo: "ONE OCEAN",
          shippingMark: "NT2026040600003",
          lotNumber: "ONEY1122334"
        },
        {
          micron: 25,
          color: "clear",
          width: 1595,
          length: 14800,
          customer: "3M",
          itemNumber: "ZPBOPP25C159515",
          batchNumber: "3M2026040707-009",
          weightKg: 555,
          qtyInputM2: 23616,
          qtyOutputM2: 8500,
          productionNo: "ST19-000168950",
          configuration: "1595X4860",
          totalM2: 510000,
          batchNo: "STPD0027800",
          containerNo: "MSC",
          shippingMark: "3M2026040700009",
          lotNumber: "MSCU5566778"
        }
      ]
    },
    "2026-05": {
      label: "May 2026",
      locked: false,
      source: "real",
      records: [
        {
          micron: 24,
          color: "clear",
          width: 1610,
          length: 14600,
          customer: "SHURTAPE",
          itemNumber: "ZPBOPP24C161014",
          batchNumber: "6260309C05-0105-066",
          weightKg: 517,
          qtyInputM2: 24037.3,
          qtyOutputM2: 7751.7,
          productionNo: "ST19-000169937",
          configuration: "1595X4860",
          totalM2: 503860.5,
          batchNo: "STPD0027961",
          containerNo: "FOROP ADVANCED",
          shippingMark: "F10543-2603300010",
          lotNumber: "MSDU5529960"
        },
        {
          micron: 24,
          color: "clear",
          width: 1280,
          length: 16150,
          customer: "ZHEJIANG JINRUI",
          itemNumber: "ZPBOPP24C128016A",
          batchNumber: "JR1260323A0603060",
          weightKg: 350,
          qtyInputM2: 20999.68,
          qtyOutputM2: null,
          productionNo: "ST19-000170282",
          configuration: "1280X4000",
          totalM2: 92160,
          batchNo: "STPD0027799",
          containerNo: "ZHEJIANG JINRUI",
          shippingMark: "JR2026040802",
          lotNumber: "TXGU5554390"
        }
      ]
    },
    "2026-03": { label: "March 2026", locked: true, source: null, records: [] },
    "2026-02": { label: "February 2026", locked: true, source: null, records: [] },
    "2026-01": { label: "January 2026", locked: true, source: null, records: [] }
  },

  // Helper: get all records for a month-key
  getRecords(monthKey) {
    return this.months[monthKey]?.records || [];
  },

  // Helper: compute KPIs for a set of records
  computeKPIs(records) {
    const totalBatches = records.length;
    const totalWeightKg = records.reduce((s, r) => s + (r.weightKg || 0), 0);
    const totalQtyInput = records.reduce((s, r) => s + (r.qtyInputM2 || 0), 0);
    const totalQtyOutput = records.reduce((s, r) => s + (r.qtyOutputM2 || 0), 0);
    const totalM2 = records.reduce((s, r) => s + (r.totalM2 || 0), 0);
    const efficiency = totalQtyInput > 0 ? ((totalQtyOutput / totalQtyInput) * 100).toFixed(1) : 0;
    const customers = [...new Set(records.map(r => r.customer).filter(Boolean))];
    const colorBreakdown = records.reduce((acc, r) => {
      acc[r.color] = (acc[r.color] || 0) + 1;
      return acc;
    }, {});
    const micronBreakdown = records.reduce((acc, r) => {
      const key = r.micron + 'μ';
      acc[key] = (acc[key] || 0) + (r.qtyInputM2 || 0);
      return acc;
    }, {});
    return {
      totalBatches,
      totalWeightKg: totalWeightKg.toFixed(1),
      totalQtyInput: totalQtyInput.toFixed(1),
      totalQtyOutput: totalQtyOutput.toFixed(1),
      totalM2: totalM2.toFixed(0),
      efficiency,
      customers,
      colorBreakdown,
      micronBreakdown
    };
  }
};