// ================================================================
// DATA — pre-loaded supply lists (datos base, no se pueden borrar)
// ================================================================
const DATA = {
  items: {
    bebes: {
      Medicamentos: [
        { id: 'b-m-1', name: 'Paracetamol infantil (gotas)', qty: '100ml por niño', by: 'Lista base', ts: 1719187200 },
        { id: 'b-m-2', name: 'Suero de rehidratación oral (sachet)', qty: '10 sobres', by: 'Lista base', ts: 1719187200 },
        { id: 'b-m-3', name: 'Ibuprofeno infantil (suspensión)', qty: '120ml', by: 'Lista base', ts: 1719187200 },
        { id: 'b-m-4', name: 'Vitamina D gotas', qty: 'Frasco x30ml', by: '@stephany.abasali', ts: 1719187200 },
        { id: 'b-m-5', name: 'Termómetro digital', qty: '1 por familia', by: 'Lista base', ts: 1719187200 },
      ],
      Alimentos: [
        { id: 'b-a-1', name: 'Fórmula láctea infantil (0-6 meses)', qty: '2 latas por bebé', by: 'Lista base', ts: 1719187200 },
        { id: 'b-a-2', name: 'Fórmula de continuación (6-12 meses)', qty: '2 latas', by: 'Lista base', ts: 1719187200 },
        { id: 'b-a-3', name: 'Papillas / potitos de frutas o verduras', qty: '20 unidades', by: 'Lista base', ts: 1719187200 },
        { id: 'b-a-4', name: 'Cereal de arroz sin azúcar', qty: '500g', by: 'Lista base', ts: 1719187200 },
        { id: 'b-a-5', name: 'Agua purificada (botellas pequeñas)', qty: 'Pack x24', by: 'Lista base', ts: 1719187200 },
      ],
      'Higiene / Aseo': [
        { id: 'b-h-1', name: 'Pañales desechables (tallas P, M, G)', qty: 'Pack x50 por talla', by: 'Lista base', ts: 1719187200 },
        { id: 'b-h-2', name: 'Toallitas húmedas sin perfume', qty: '3 packs', by: 'Lista base', ts: 1719187200 },
        { id: 'b-h-3', name: 'Crema antipañalitis (zinc)', qty: '2 tubos', by: 'Lista base', ts: 1719187200 },
        { id: 'b-h-4', name: 'Shampoo para bebé (sin lágrimas)', qty: '1 frasco', by: 'Lista base', ts: 1719187200 },
        { id: 'b-h-5', name: 'Algodón estéril', qty: '100g', by: 'Lista base', ts: 1719187200 },
      ],
      'Ropa / Abrigo': [
        { id: 'b-r-1', name: 'Bodys de algodón (0-3, 3-6, 6-12 meses)', qty: '5 por talla', by: 'Lista base', ts: 1719187200 },
        { id: 'b-r-2', name: 'Pijamas con pies (talla M)', qty: '3 unidades', by: 'Lista base', ts: 1719187200 },
        { id: 'b-r-3', name: 'Cobija liviana de algodón', qty: '2 por bebé', by: 'Lista base', ts: 1719187200 },
        { id: 'b-r-4', name: 'Gorrito de algodón para recién nacido', qty: '3 unidades', by: 'Lista base', ts: 1719187200 },
        { id: 'b-r-5', name: 'Calcetines de bebé', qty: '5 pares', by: 'Lista base', ts: 1719187200 },
      ],
      Otros: [
        { id: 'b-o-1', name: 'Biberones esterilizables', qty: '3 unidades', by: 'Lista base', ts: 1719187200 },
        { id: 'b-o-2', name: 'Chupos / chupetes', qty: '2 unidades', by: 'Lista base', ts: 1719187200 },
        { id: 'b-o-3', name: 'Manta térmica liviana', qty: '1 por bebé', by: 'Lista base', ts: 1719187200 },
      ],
    },
    ninos: {
      Medicamentos: [
        { id: 'n-m-1', name: 'Paracetamol tabletas/jarabe (según peso)', qty: '1 frasco', by: 'Lista base', ts: 1719187200 },
        { id: 'n-m-2', name: 'Suero oral rehidratante', qty: '10 sobres', by: 'Lista base', ts: 1719187200 },
        { id: 'n-m-3', name: 'Ibuprofeno 200mg', qty: '20 tabletas', by: 'Lista base', ts: 1719187200 },
        { id: 'n-m-4', name: 'Antihistamínico infantil (loratadina)', qty: '1 frasco', by: 'Lista base', ts: 1719187200 },
        { id: 'n-m-5', name: 'Vitaminas multivitamínicas masticables', qty: '60 tabletas', by: 'Lista base', ts: 1719187200 },
      ],
      Alimentos: [
        { id: 'n-a-1', name: 'Leche en polvo entera', qty: '1kg por semana', by: 'Lista base', ts: 1719187200 },
        { id: 'n-a-2', name: 'Galletas de avena / integrales', qty: '10 paquetes', by: 'Lista base', ts: 1719187200 },
        { id: 'n-a-3', name: 'Atún en lata', qty: '12 latas', by: 'Lista base', ts: 1719187200 },
        { id: 'n-a-4', name: 'Arroz blanco', qty: '5kg', by: 'Lista base', ts: 1719187200 },
        { id: 'n-a-5', name: 'Barras energéticas / cereal', qty: '24 unidades', by: 'Lista base', ts: 1719187200 },
      ],
      'Higiene / Aseo': [
        { id: 'n-h-1', name: 'Cepillo dental infantil', qty: '1 por niño', by: 'Lista base', ts: 1719187200 },
        { id: 'n-h-2', name: 'Pasta de dientes infantil', qty: '1 tubo', by: 'Lista base', ts: 1719187200 },
        { id: 'n-h-3', name: 'Jabón antibacterial', qty: '5 barras', by: 'Lista base', ts: 1719187200 },
        { id: 'n-h-4', name: 'Toallitas húmedas', qty: '2 packs', by: 'Lista base', ts: 1719187200 },
        { id: 'n-h-5', name: 'Shampoo infantil', qty: '1 frasco', by: 'Lista base', ts: 1719187200 },
      ],
      'Ropa / Abrigo': [
        { id: 'n-r-1', name: 'Camisetas algodón (tallas 4-10)', qty: '3 por niño', by: 'Lista base', ts: 1719187200 },
        { id: 'n-r-2', name: 'Pantalones o shorts', qty: '2 por niño', by: 'Lista base', ts: 1719187200 },
        { id: 'n-r-3', name: 'Ropa interior de algodón', qty: '5 por niño', by: 'Lista base', ts: 1719187200 },
        { id: 'n-r-4', name: 'Tenis o sandalias (tallas 24-36)', qty: '1 par por niño', by: 'Lista base', ts: 1719187200 },
        { id: 'n-r-5', name: 'Cobija / manta', qty: '1 por niño', by: 'Lista base', ts: 1719187200 },
      ],
      Otros: [
        { id: 'n-o-1', name: 'Útiles escolares básicos (cuaderno, lápiz)', qty: 'Kit básico', by: 'Lista base', ts: 1719187200 },
        { id: 'n-o-2', name: 'Juguete sencillo (pelota, crayones)', qty: '1 por niño', by: 'Lista base', ts: 1719187200 },
      ],
    },
    adolescentes: {
      Medicamentos: [
        { id: 'ad-m-1', name: 'Paracetamol 500mg', qty: '20 tabletas', by: 'Lista base', ts: 1719187200 },
        { id: 'ad-m-2', name: 'Ibuprofeno 400mg', qty: '20 tabletas', by: 'Lista base', ts: 1719187200 },
        { id: 'ad-m-3', name: 'Suero oral rehidratante', qty: '5 sobres', by: 'Lista base', ts: 1719187200 },
        { id: 'ad-m-4', name: 'Antihistamínico (loratadina 10mg)', qty: '10 tabletas', by: 'Lista base', ts: 1719187200 },
        { id: 'ad-m-5', name: 'Gasas estériles y apósitos', qty: 'Caja', by: '@stephany.abasali', ts: 1719187200 },
      ],
      Alimentos: [
        { id: 'ad-a-1', name: 'Barras de proteína / granola', qty: '20 unidades', by: 'Lista base', ts: 1719187200 },
        { id: 'ad-a-2', name: 'Frutas secas (pasas, nueces)', qty: '500g', by: 'Lista base', ts: 1719187200 },
        { id: 'ad-a-3', name: 'Atún / sardinas en lata', qty: '10 latas', by: 'Lista base', ts: 1719187200 },
        { id: 'ad-a-4', name: 'Galletas integrales', qty: '10 paquetes', by: 'Lista base', ts: 1719187200 },
        { id: 'ad-a-5', name: 'Jugos o bebidas envasadas sin azúcar', qty: '24 unidades', by: 'Lista base', ts: 1719187200 },
      ],
      'Higiene / Aseo': [
        { id: 'ad-h-1', name: 'Desodorante', qty: '1 por persona', by: 'Lista base', ts: 1719187200 },
        { id: 'ad-h-2', name: 'Toallas sanitarias (para adolescentes)', qty: '2 packs', by: 'Lista base', ts: 1719187200 },
        { id: 'ad-h-3', name: 'Jabón corporal', qty: '3 barras', by: 'Lista base', ts: 1719187200 },
        { id: 'ad-h-4', name: 'Cepillo y pasta dental', qty: 'Kit por persona', by: 'Lista base', ts: 1719187200 },
        { id: 'ad-h-5', name: 'Tapabocas quirúrgicos', qty: '20 unidades', by: '@stephany.abasali', ts: 1719187200 },
      ],
      'Ropa / Abrigo': [
        { id: 'ad-r-1', name: 'Camisetas talla S/M', qty: '3 unidades', by: 'Lista base', ts: 1719187200 },
        { id: 'ad-r-2', name: 'Pantalón jean o deportivo', qty: '2 unidades', by: 'Lista base', ts: 1719187200 },
        { id: 'ad-r-3', name: 'Ropa interior de algodón', qty: '5 por persona', by: 'Lista base', ts: 1719187200 },
        { id: 'ad-r-4', name: 'Tenis o zapatos (tallas 36-42)', qty: '1 par', by: 'Lista base', ts: 1719187200 },
        { id: 'ad-r-5', name: 'Manta térmica liviana', qty: '1 por persona', by: 'Lista base', ts: 1719187200 },
      ],
      Otros: [
        { id: 'ad-o-1', name: 'Cuadernos y bolígrafos', qty: '3 cuadernos', by: 'Lista base', ts: 1719187200 },
        { id: 'ad-o-2', name: 'Cargador de celular (USB)', qty: '1 por persona', by: 'Lista base', ts: 1719187200 },
      ],
    },
    adultos: {
      Medicamentos: [
        { id: 'au-m-1', name: 'Paracetamol 500mg', qty: '30 tabletas', by: 'Lista base', ts: 1719187200 },
        { id: 'au-m-2', name: 'Ibuprofeno 400-600mg', qty: '30 tabletas', by: 'Lista base', ts: 1719187200 },
        { id: 'au-m-3', name: 'Vendas elásticas 4 y 6 pulgadas', qty: '5 por tipo', by: '@stephany.abasali', ts: 1719187200 },
        { id: 'au-m-4', name: 'Solución fisiológica al 0.9% (500ml)', qty: '5 frascos', by: '@stephany.abasali', ts: 1719187200 },
        { id: 'au-m-5', name: 'Guantes de nitrilo desechables', qty: 'Caja x100', by: '@stephany.abasali', ts: 1719187200 },
        { id: 'au-m-6', name: 'Gasas estériles y apósitos', qty: 'Caja', by: '@stephany.abasali', ts: 1719187200 },
        { id: 'au-m-7', name: 'Alcohol isopropílico / Betadine', qty: '500ml c/u', by: '@stephany.abasali', ts: 1719187200 },
        { id: 'au-m-8', name: 'Diclofenac Sódico (ampollas)', qty: '10 ampollas', by: '@stephany.abasali', ts: 1719187200 },
        { id: 'au-m-9', name: 'Omeprazol 20mg', qty: '30 cápsulas', by: 'Lista base', ts: 1719187200 },
        { id: 'au-m-10', name: 'Manta térmica de emergencia', qty: '1 por persona', by: '@stephany.abasali', ts: 1719187200 },
      ],
      Alimentos: [
        { id: 'au-a-1', name: 'Arroz blanco', qty: '5kg por familia', by: 'Lista base', ts: 1719187200 },
        { id: 'au-a-2', name: 'Caraotas / frijoles negros', qty: '2kg', by: 'Lista base', ts: 1719187200 },
        { id: 'au-a-3', name: 'Aceite vegetal', qty: '1 litro', by: 'Lista base', ts: 1719187200 },
        { id: 'au-a-4', name: 'Atún en agua (latas)', qty: '24 latas', by: 'Lista base', ts: 1719187200 },
        { id: 'au-a-5', name: 'Harina de maíz precocida', qty: '2kg', by: 'Lista base', ts: 1719187200 },
        { id: 'au-a-6', name: 'Sal, azúcar, café', qty: '500g c/u', by: 'Lista base', ts: 1719187200 },
      ],
      'Higiene / Aseo': [
        { id: 'au-h-1', name: 'Jabón antibacterial', qty: '5 barras', by: 'Lista base', ts: 1719187200 },
        { id: 'au-h-2', name: 'Shampoo', qty: '2 frascos', by: 'Lista base', ts: 1719187200 },
        { id: 'au-h-3', name: 'Toallas sanitarias', qty: '2 packs', by: 'Lista base', ts: 1719187200 },
        { id: 'au-h-4', name: 'Papel higiénico', qty: '24 rollos', by: 'Lista base', ts: 1719187200 },
        { id: 'au-h-5', name: 'Tapabocas quirúrgicos', qty: '50 unidades', by: '@stephany.abasali', ts: 1719187200 },
      ],
      'Ropa / Abrigo': [
        { id: 'au-r-1', name: 'Camisetas de algodón (tallas M, L, XL)', qty: '3 por persona', by: 'Lista base', ts: 1719187200 },
        { id: 'au-r-2', name: 'Pantalones (tallas variadas)', qty: '2 por persona', by: 'Lista base', ts: 1719187200 },
        { id: 'au-r-3', name: 'Ropa interior', qty: '5 por persona', by: 'Lista base', ts: 1719187200 },
        { id: 'au-r-4', name: 'Calzado (variedad de tallas)', qty: '1 par', by: 'Lista base', ts: 1719187200 },
        { id: 'au-r-5', name: 'Frazada o manta', qty: '1 por persona', by: 'Lista base', ts: 1719187200 },
      ],
      Otros: [
        { id: 'au-o-1', name: 'Bolsas de hielo instantáneo para traumatismos', qty: '10 unidades', by: '@stephany.abasali', ts: 1719187200 },
        { id: 'au-o-2', name: 'Linterna + pilas', qty: '1 por familia', by: 'Lista base', ts: 1719187200 },
        { id: 'au-o-3', name: 'Camilla plegable', qty: '1 por centro de acopio', by: 'Lista base', ts: 1719187200 },
        { id: 'au-o-4', name: 'Silla de ruedas', qty: 'Según disponibilidad', by: 'Lista base', ts: 1719187200 },
        { id: 'au-o-5', name: 'Tanques de oxígeno portátiles', qty: 'Urgente', by: 'Lista base', ts: 1719187200 },
      ],
    },
    mayores: {
      Medicamentos: [
        { id: 'am-m-1', name: 'Antihipertensivos (enalapril / captopril)', qty: '30 tabletas', by: '@stephany.abasali', ts: 1719187200 },
        { id: 'am-m-2', name: 'Aspirina 100mg (cardioprotectora)', qty: '30 tabletas', by: '@stephany.abasali', ts: 1719187200 },
        { id: 'am-m-3', name: 'Metamizol / Dipirona (ampollas)', qty: '10 ampollas', by: '@stephany.abasali', ts: 1719187200 },
        { id: 'am-m-4', name: 'Insulina (conservación en frío)', qty: 'Según prescripción', by: 'Lista base', ts: 1719187200 },
        { id: 'am-m-5', name: 'Dextrosa 10-50% (para hipoglucemias)', qty: '5 frascos', by: '@stephany.abasali', ts: 1719187200 },
        { id: 'am-m-6', name: 'Salbutamol inhalador / Budesonida', qty: '1 por persona', by: '@stephany.abasali', ts: 1719187200 },
      ],
      Alimentos: [
        { id: 'am-a-1', name: 'Sopas instantáneas bajas en sodio', qty: '20 unidades', by: 'Lista base', ts: 1719187200 },
        { id: 'am-a-2', name: 'Galletas de arroz o sin gluten', qty: '10 paquetes', by: 'Lista base', ts: 1719187200 },
        { id: 'am-a-3', name: 'Frutas en conserva (durazno, pera)', qty: '10 latas', by: 'Lista base', ts: 1719187200 },
        { id: 'am-a-4', name: 'Jugo de naranja natural embotellado', qty: '12 unidades', by: 'Lista base', ts: 1719187200 },
        { id: 'am-a-5', name: 'Alimentos blandos / papillas para adultos', qty: '10 unidades', by: 'Lista base', ts: 1719187200 },
      ],
      'Higiene / Aseo': [
        { id: 'am-h-1', name: 'Pañales adulto (tallas M y L)', qty: 'Pack x20', by: 'Lista base', ts: 1719187200 },
        { id: 'am-h-2', name: 'Crema humectante / vaselina', qty: '2 frascos', by: 'Lista base', ts: 1719187200 },
        { id: 'am-h-3', name: 'Toallitas húmedas sin perfume', qty: '3 packs', by: 'Lista base', ts: 1719187200 },
        { id: 'am-h-4', name: 'Jabón neutro pH balanceado', qty: '3 barras', by: 'Lista base', ts: 1719187200 },
        { id: 'am-h-5', name: 'Cepillo dental suave', qty: '1 por persona', by: 'Lista base', ts: 1719187200 },
      ],
      'Ropa / Abrigo': [
        { id: 'am-r-1', name: 'Ropa cómoda (tallas grandes, algodón)', qty: '3 mudas', by: 'Lista base', ts: 1719187200 },
        { id: 'am-r-2', name: 'Zapatos antideslizantes', qty: '1 par', by: 'Lista base', ts: 1719187200 },
        { id: 'am-r-3', name: 'Medias de algodón gruesas', qty: '5 pares', by: 'Lista base', ts: 1719187200 },
        { id: 'am-r-4', name: 'Cobija o manta gruesa', qty: '1 por persona', by: 'Lista base', ts: 1719187200 },
        { id: 'am-r-5', name: 'Faja o soporte lumbar', qty: 'Según necesidad', by: 'Lista base', ts: 1719187200 },
      ],
      Otros: [
        { id: 'am-o-1', name: 'Bastón / andador', qty: 'Según necesidad', by: 'Lista base', ts: 1719187200 },
        { id: 'am-o-2', name: 'Silla de ruedas plegable', qty: 'Urgente', by: 'Lista base', ts: 1719187200 },
        { id: 'am-o-3', name: 'Audífonos o pilas para audífono', qty: 'Según tipo', by: 'Lista base', ts: 1719187200 },
        { id: 'am-o-4', name: 'Lentes de lectura (dioptrías variadas)', qty: 'Kit variado', by: 'Lista base', ts: 1719187200 },
      ],
    },
    mascotas: {
      Medicamentos: [
        { id: 'ms-m-1', name: 'Antiparasitario (perros y gatos)', qty: '20 dosis', by: 'Lista base', ts: 1719187200 },
        { id: 'ms-m-2', name: 'Antibiótico de amplio espectro veterinario', qty: '10 unidades', by: 'Lista base', ts: 1719187200 },
        { id: 'ms-m-3', name: 'Suero oral veterinario', qty: '10 sobres', by: 'Lista base', ts: 1719187200 },
        { id: 'ms-m-4', name: 'Antiséptico (clorhexidina) para heridas', qty: '500ml', by: 'Lista base', ts: 1719187200 },
        { id: 'ms-m-5', name: 'Vendas para patas', qty: '10 unidades', by: 'Lista base', ts: 1719187200 },
      ],
      Alimentos: [
        { id: 'ms-a-1', name: 'Croquetas / kibble para perros (adultos)', qty: '5kg', by: 'Lista base', ts: 1719187200 },
        { id: 'ms-a-2', name: 'Croquetas para gatos', qty: '3kg', by: 'Lista base', ts: 1719187200 },
        { id: 'ms-a-3', name: 'Alimento húmedo en lata para mascotas', qty: '10 latas', by: 'Lista base', ts: 1719187200 },
        { id: 'ms-a-4', name: 'Agua potable (para animales)', qty: '10 litros/día', by: 'Lista base', ts: 1719187200 },
        { id: 'ms-a-5', name: 'Suplemento vitamínico para mascotas', qty: '1 frasco', by: 'Lista base', ts: 1719187200 },
      ],
      'Higiene / Aseo': [
        { id: 'ms-h-1', name: 'Shampoo para perros (antipulgas)', qty: '2 frascos', by: 'Lista base', ts: 1719187200 },
        { id: 'ms-h-2', name: 'Collar antipulgas', qty: '1 por mascota', by: 'Lista base', ts: 1719187200 },
        { id: 'ms-h-3', name: 'Bolsas para recolección de heces', qty: '2 packs', by: 'Lista base', ts: 1719187200 },
      ],
      'Ropa / Abrigo': [
        { id: 'ms-r-1', name: 'Cobija pequeña / manta para mascota', qty: '1 por animal', by: 'Lista base', ts: 1719187200 },
        { id: 'ms-r-2', name: 'Jaula o transportadora plegable', qty: '1 por mascota', by: 'Lista base', ts: 1719187200 },
      ],
      Otros: [
        { id: 'ms-o-1', name: 'Plato para comida y agua', qty: '1 set por mascota', by: 'Lista base', ts: 1719187200 },
        { id: 'ms-o-2', name: 'Correa y collar de identificación', qty: '1 por perro', by: 'Lista base', ts: 1719187200 },
        { id: 'ms-o-3', name: 'Caja de arena para gatos', qty: '1 bolsa 10kg', by: 'Lista base', ts: 1719187200 },
      ],
    },
  },
  acopio: [
    {
      id: 'ac-1',
      nombre: 'Parroquia San José — Centro de Acopio Solidario',
      pais: 'República Dominicana',
      ciudad: 'Santo Domingo',
      direccion: 'Av. Bolívar #45, Gazcue, Santo Domingo, RD',
      horario: 'Lun-Sáb 8am-6pm, Dom 9am-1pm',
      contacto: '809-555-0101',
      recibe: 'Medicamentos, ropa, alimentos no perecederos, artículos de higiene',
      by: 'Equipo coordinador',
      lat: 18.4736, lng: -69.9388, ts: 1719187200,
    },
    {
      id: 'ac-2',
      nombre: 'Consulado de Venezuela — Punto de Recepción Oficial',
      pais: 'República Dominicana',
      ciudad: 'Santo Domingo',
      direccion: 'Av. Winston Churchill, Torre Empresarial, Santo Domingo',
      horario: 'Lun-Vie 9am-4pm',
      contacto: '809-555-0202',
      recibe: 'Todo tipo de donaciones. Coordinan envío directo a Venezuela.',
      by: 'Equipo coordinador',
      lat: 18.4795, lng: -69.9318, ts: 1719187200,
    },
    {
      id: 'ac-3',
      nombre: 'Cruz Roja Colombiana — Bogotá',
      pais: 'Colombia',
      ciudad: 'Bogotá',
      direccion: 'Calle 32 #41-51, Bogotá, Colombia',
      horario: 'Lun-Vie 8am-5pm',
      contacto: 'voluntarios@cruzroja.org.co',
      recibe: 'Medicamentos vigentes, alimentos, ropa en buen estado',
      by: 'Lista base',
      lat: 4.6097, lng: -74.0817, ts: 1719187200,
    },
  ],
};

// Cifras de referencia (sujetas a actualización oficial — ver fuente en el hero).
// Editar manualmente aquí si las autoridades publican cifras nuevas.
const STATS_DEFAULT = {
  muertos: '235+',
  heridos: '4.300+',
  replicas: '+40',
  updated: '25 de junio de 2026',
};

// ================================================================
// FIREBASE INIT (con fallback seguro si no está configurado)
// ================================================================
let db = null;
let firebaseReady = false;

function isFirebaseConfigured() {
  return typeof FIREBASE_CONFIG !== 'undefined'
    && FIREBASE_CONFIG.apiKey
    && FIREBASE_CONFIG.apiKey !== 'TU_API_KEY'
    && FIREBASE_CONFIG.projectId
    && FIREBASE_CONFIG.projectId !== 'TU_PROYECTO';
}

function initFirebase() {
  if (!isFirebaseConfigured()) {
    console.info('[Ayuda Solidaria] Firebase no configurado todavía — modo solo-local activo. Ver firebase-config.js');
    return;
  }
  try {
    firebase.initializeApp(FIREBASE_CONFIG);
    db = firebase.firestore();
    // Persistencia offline de Firestore: cachea lecturas y encola escrituras
    // automáticamente cuando no hay red.
    db.enablePersistence({ synchronizeTabs: true }).catch(err => {
      console.warn('[Ayuda Solidaria] Persistencia offline de Firestore no disponible:', err.code);
    });
    firebaseReady = true;
  } catch (e) {
    console.error('[Ayuda Solidaria] Error al iniciar Firebase:', e);
    firebaseReady = false;
  }
}

// ================================================================
// STORAGE (localStorage wrapper) — respaldo local universal
// ================================================================
const STORAGE_KEY_ITEMS   = 'ayuda_items_v2';
const STORAGE_KEY_ACOPIO  = 'ayuda_acopio_v2';
const STORAGE_KEY_PENDING = 'ayuda_pending_v2';
const STORAGE_KEY_STATS   = 'ayuda_stats_v1';

function loadFromStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch { return fallback; }
}
function saveToStorage(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { console.warn('Storage error', e); }
}

// Merge stored items into DATA (las contribuciones del usuario persisten)
function initData() {
  const storedItems  = loadFromStorage(STORAGE_KEY_ITEMS, {});
  const storedAcopio = loadFromStorage(STORAGE_KEY_ACOPIO, []);
  const storedStats  = loadFromStorage(STORAGE_KEY_STATS, STATS_DEFAULT);

  for (const group in storedItems) {
    if (!DATA.items[group]) DATA.items[group] = {};
    for (const cat in storedItems[group]) {
      if (!DATA.items[group][cat]) DATA.items[group][cat] = [];
      const existingIds = new Set(DATA.items[group][cat].map(i => i.id));
      for (const item of storedItems[group][cat]) {
        if (!existingIds.has(item.id)) DATA.items[group][cat].push(item);
      }
    }
  }
  const existingAcIds = new Set(DATA.acopio.map(a => a.id));
  for (const ac of storedAcopio) {
    if (!existingAcIds.has(ac.id)) DATA.acopio.push(ac);
  }
  return storedStats;
}

// ================================================================
// SINCRONIZACIÓN CON FIRESTORE
// ================================================================
// Al cargar: trae todo lo que otros usuarios han agregado.
async function pullRemoteData() {
  if (!firebaseReady) return;
  try {
    const itemsSnap = await db.collection('items').get();
    itemsSnap.forEach(doc => {
      const d = doc.data();
      if (!d.group || !d.cat || !d.name) return;
      if (!DATA.items[d.group]) DATA.items[d.group] = {};
      if (!DATA.items[d.group][d.cat]) DATA.items[d.group][d.cat] = [];
      const exists = DATA.items[d.group][d.cat].some(i => i.id === doc.id);
      if (!exists) {
        DATA.items[d.group][d.cat].push({ id: doc.id, name: d.name, qty: d.qty || '', by: d.by || 'Anónimo', ts: d.ts || Date.now() / 1000 });
      }
    });
    const acopioSnap = await db.collection('acopio').get();
    acopioSnap.forEach(doc => {
      const d = doc.data();
      if (!d.nombre || !d.pais) return;
      const exists = DATA.acopio.some(a => a.id === doc.id);
      if (!exists) DATA.acopio.push({ id: doc.id, ...d });
    });
  } catch (e) {
    console.warn('[Ayuda Solidaria] No se pudo sincronizar con Firestore (puede ser por falta de conexión):', e.message);
  }
}

// Suscripción en tiempo real: si alguien más agrega algo mientras tienes
// la página abierta, aparece sin recargar.
function subscribeRealtime() {
  if (!firebaseReady) return;
  db.collection('items').onSnapshot(snap => {
    let changed = false;
    snap.docChanges().forEach(change => {
      if (change.type === 'added') {
        const d = change.doc.data();
        if (!d.group || !d.cat || !d.name) return;
        if (!DATA.items[d.group]) DATA.items[d.group] = {};
        if (!DATA.items[d.group][d.cat]) DATA.items[d.group][d.cat] = [];
        const exists = DATA.items[d.group][d.cat].some(i => i.id === change.doc.id);
        if (!exists) {
          DATA.items[d.group][d.cat].push({ id: change.doc.id, name: d.name, qty: d.qty || '', by: d.by || 'Anónimo', ts: d.ts || Date.now() / 1000 });
          changed = true;
        }
      }
    });
    if (changed) renderItems(currentGroup);
  }, err => console.warn('[Ayuda Solidaria] Realtime items error:', err.message));

  db.collection('acopio').onSnapshot(snap => {
    let changed = false;
    snap.docChanges().forEach(change => {
      if (change.type === 'added') {
        const d = change.doc.data();
        if (!d.nombre || !d.pais) return;
        const exists = DATA.acopio.some(a => a.id === change.doc.id);
        if (!exists) { DATA.acopio.push({ id: change.doc.id, ...d }); changed = true; }
      }
    });
    if (changed) renderAcopio(document.getElementById('country-filter').value);
  }, err => console.warn('[Ayuda Solidaria] Realtime acopio error:', err.message));
}

// Intentar reenviar lo que quedó pendiente en localStorage (de antes de
// tener Firebase configurado, o de cuando se perdió la red a mitad de un
// guardado).
async function flushPendingQueue() {
  if (!firebaseReady || !navigator.onLine) return;
  const pending = loadFromStorage(STORAGE_KEY_PENDING, []);
  if (pending.length === 0) return;
  const stillPending = [];
  for (const p of pending) {
    try {
      if (p.type === 'item') {
        await db.collection('items').doc(p.item.id).set({
          group: p.group, cat: p.cat, name: p.item.name, qty: p.item.qty, by: p.item.by, ts: p.item.ts,
        });
      } else if (p.type === 'acopio') {
        await db.collection('acopio').doc(p.ac.id).set(p.ac);
      }
    } catch (e) {
      stillPending.push(p); // si falla, lo dejamos para el próximo intento
    }
  }
  saveToStorage(STORAGE_KEY_PENDING, stillPending);
  updateSyncIndicator();
  updateOnlineStatus();
}

// ================================================================
// ONLINE / OFFLINE STATUS
// ================================================================
const statusBar  = document.getElementById('status-bar');
const statusText = document.getElementById('status-text');

function updateOnlineStatus() {
  const online = navigator.onLine;
  const pending = loadFromStorage(STORAGE_KEY_PENDING, []).length;
  if (online) {
    if (pending > 0) {
      statusBar.className = 'pending';
      statusText.textContent = `En línea — ${pending} ítem(s) pendiente(s) de sincronizar`;
    } else {
      statusBar.className = 'online';
    }
    flushPendingQueue();
  } else {
    statusBar.className = 'offline';
    statusText.textContent = 'Sin conexión — Los datos se guardan localmente';
  }
  updateSyncIndicator();
}

window.addEventListener('online',  updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

function updateSyncIndicator() {
  const ind = document.getElementById('sync-indicator');
  const pending = loadFromStorage(STORAGE_KEY_PENDING, []);
  if (pending.length > 0) {
    ind.style.display = 'inline-flex';
    ind.querySelector('span:last-child').textContent = `${pending.length} pendiente(s)`;
  } else {
    ind.style.display = 'none';
  }
}

// ================================================================
// TOAST
// ================================================================
function showToast(msg, duration = 3000) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), duration);
}

// ================================================================
// RENDER ITEMS
// ================================================================
const CATEGORIES = ['Medicamentos', 'Alimentos', 'Higiene / Aseo', 'Ropa / Abrigo', 'Otros'];
const CAT_ICONS = {
  'Medicamentos': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="M8.5 8.5 16 16"/></svg>`,
  'Alimentos': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 0 1 10 10H2A10 10 0 0 1 12 2z"/><path d="M2 12h20M12 12v10"/></svg>`,
  'Higiene / Aseo': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6V3M15 6V3M9 6h6M3 10h18M3 10v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10"/></svg>`,
  'Ropa / Abrigo': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z"/></svg>`,
  'Otros': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>`,
};

let currentGroup = 'bebes';

function renderItems(group) {
  currentGroup = group;
  const panel = document.getElementById('cat-panels');
  panel.innerHTML = '';
  const groupData = DATA.items[group] || {};
  CATEGORIES.forEach(cat => {
    const items = groupData[cat] || [];
    const div = document.createElement('div');
    div.className = 'cat-panel';
    div.setAttribute('role', 'region');
    div.setAttribute('aria-label', cat);
    const safeCat = cat.replace(/\s\/\s/g, '-').replace(/\s/g, '-');

    div.innerHTML = `
      <div class="cat-header" role="button" tabindex="0" aria-expanded="false" aria-controls="cat-body-${safeCat}">
        <div class="cat-header-left">
          <div class="cat-icon" aria-hidden="true">${CAT_ICONS[cat]}</div>
          <span class="cat-title">${cat}</span>
          <span class="cat-count">${items.length} ítems</span>
        </div>
        <svg class="cat-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
      </div>
      <div class="cat-body" id="cat-body-${safeCat}">
        <div class="items-list" id="items-${group}-${safeCat}">
          ${items.map(renderItem).join('')}
        </div>
        <div class="add-item-form">
          <h4>+ Agregar insumo</h4>
          <div class="form-row">
            <input type="text" placeholder="Nombre del insumo" data-field="name" aria-label="Nombre del insumo" />
            <input type="text" placeholder="Cantidad sugerida (opcional)" data-field="qty" aria-label="Cantidad sugerida" />
            <input type="text" placeholder="Tu nombre (opcional)" data-field="by" aria-label="Tu nombre (opcional)" />
            <button class="btn btn-blue" data-group="${group}" data-cat="${cat}" aria-label="Agregar insumo a la lista">Agregar</button>
          </div>
        </div>
      </div>
    `;

    const header = div.querySelector('.cat-header');
    header.addEventListener('click', () => {
      const open = div.classList.toggle('open');
      header.setAttribute('aria-expanded', open);
    });
    header.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); header.click(); }
    });

    const addBtn = div.querySelector('.btn-blue');
    addBtn.addEventListener('click', () => {
      const row = addBtn.closest('.form-row');
      const nameInput = row.querySelector('[data-field="name"]');
      const qtyInput  = row.querySelector('[data-field="qty"]');
      const byInput   = row.querySelector('[data-field="by"]');
      const name = nameInput.value.trim();
      if (!name) { nameInput.focus(); showToast('Por favor escribe el nombre del insumo.'); return; }
      addItem(group, cat, {
        id: `user-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,
        name,
        qty: qtyInput.value.trim() || '',
        by: byInput.value.trim() || 'Anónimo',
        ts: Date.now() / 1000,
      });
      nameInput.value = ''; qtyInput.value = ''; byInput.value = '';
    });

    panel.appendChild(div);

    div.addEventListener('click', e => {
      if (e.target.classList.contains('btn-report')) {
        const card = e.target.closest('.item-card');
        if (card) {
          card.classList.toggle('reported');
          e.target.textContent = card.classList.contains('reported') ? 'Reportado' : 'Reportar';
          logReport(card.dataset.id, card.classList.contains('reported'));
          showToast(card.classList.contains('reported') ? 'Ítem marcado como posible duplicado.' : 'Reporte retirado.');
        }
      }
    });
  });
}

function renderItem(item) {
  return `<div class="item-card" data-id="${item.id}">
    <div class="item-dot" aria-hidden="true"></div>
    <div class="item-info">
      <div class="item-name">${escapeHtml(item.name)}</div>
      <div class="item-meta">${item.qty ? `Cant. sugerida: ${escapeHtml(item.qty)} · ` : ''}Aportado por: ${escapeHtml(item.by || 'Anónimo')}</div>
    </div>
    <div class="item-actions">
      <button class="btn-report btn-sm" aria-label="Reportar este ítem como duplicado o erróneo">Reportar</button>
    </div>
  </div>`;
}

function addItem(group, cat, item) {
  if (!DATA.items[group]) DATA.items[group] = {};
  if (!DATA.items[group][cat]) DATA.items[group][cat] = [];
  DATA.items[group][cat].push(item);

  const stored = loadFromStorage(STORAGE_KEY_ITEMS, {});
  if (!stored[group]) stored[group] = {};
  if (!stored[group][cat]) stored[group][cat] = [];
  stored[group][cat].push(item);
  saveToStorage(STORAGE_KEY_ITEMS, stored);

  renderItems(currentGroup);

  if (firebaseReady && navigator.onLine) {
    db.collection('items').doc(item.id).set({
      group, cat, name: item.name, qty: item.qty, by: item.by, ts: item.ts,
    }).then(() => {
      showToast('✓ Insumo agregado y sincronizado — gracias por contribuir.');
    }).catch(() => {
      queuePending({ type: 'item', group, cat, item, ts: Date.now() });
      showToast('✓ Guardado localmente. Se sincronizará cuando haya conexión estable.');
    });
  } else {
    queuePending({ type: 'item', group, cat, item, ts: Date.now() });
    showToast(firebaseReady
      ? '✓ Guardado sin conexión. Se sincronizará automáticamente.'
      : '✓ Insumo agregado (modo local — configura Firebase para compartirlo con todos).');
  }
}

function queuePending(entry) {
  const pending = loadFromStorage(STORAGE_KEY_PENDING, []);
  pending.push(entry);
  saveToStorage(STORAGE_KEY_PENDING, pending);
  updateSyncIndicator();
  updateOnlineStatus();
}

function logReport(itemId, isReported) {
  if (!firebaseReady || !itemId) return;
  db.collection('reportes').add({
    itemId, reported: isReported, ts: Date.now() / 1000,
  }).catch(() => { /* el reporte es solo informativo, no crítico */ });
}

function escapeHtml(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ================================================================
// GROUP TABS
// ================================================================
document.querySelectorAll('.group-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.group-tab').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    renderItems(btn.dataset.group);
  });
});

// ================================================================
// MAP & ACOPIO
// ================================================================
let map, markers = [];

function initMap() {
  if (map) return;
  map = L.map('map-container').setView([10, -65], 3);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18,
  }).addTo(map);
}

const customIcon = L.divIcon({
  className: '',
  html: `<div style="
    width:28px;height:28px;border-radius:50% 50% 50% 0;
    background:#F2C14E;border:3px solid #002D62;
    transform:rotate(-45deg);box-shadow:0 2px 6px rgba(0,0,0,.3);
  "></div>`,
  iconSize: [28, 28],
  iconAnchor: [14, 28],
  popupAnchor: [0, -30],
});

function renderAcopio(filter = '') {
  initMap();
  markers.forEach(m => map.removeLayer(m));
  markers = [];

  const list = document.getElementById('acopio-list');
  list.innerHTML = '';

  const filtered = filter ? DATA.acopio.filter(a => a.pais === filter) : DATA.acopio;

  filtered.forEach(ac => {
    if (ac.lat && ac.lng) {
      const m = L.marker([ac.lat, ac.lng], { icon: customIcon })
        .addTo(map)
        .bindPopup(`<strong>${escapeHtml(ac.nombre)}</strong><br/>${escapeHtml(ac.ciudad || '')}, ${escapeHtml(ac.pais)}<br/><small>${escapeHtml(ac.horario || '')}</small>`);
      markers.push(m);
    }

    const card = document.createElement('div');
    card.className = 'acopio-card';
    card.innerHTML = `
      <h3>${escapeHtml(ac.nombre)}</h3>
      <div class="acopio-badges">
        <span class="badge badge-blue">${escapeHtml(ac.pais)}</span>
        ${ac.ciudad ? `<span class="badge badge-gold">${escapeHtml(ac.ciudad)}</span>` : ''}
      </div>
      ${ac.direccion ? `<div class="acopio-detail"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>${escapeHtml(ac.direccion)}</div>` : ''}
      ${ac.horario ? `<div class="acopio-detail"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>${escapeHtml(ac.horario)}</div>` : ''}
      ${ac.contacto ? `<div class="acopio-detail"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.09 12 19.79 19.79 0 0 1 1 3.18 2 2 0 0 1 3 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16z"/></svg>${escapeHtml(ac.contacto)}</div>` : ''}
      ${ac.recibe ? `<div class="acopio-detail"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>${escapeHtml(ac.recibe)}</div>` : ''}
    `;
    list.appendChild(card);
  });

  if (filtered.length === 0) {
    list.innerHTML = '<p style="color:var(--text-2);text-align:center;padding:32px;">No hay centros registrados para este filtro aún. ¡Agrega el primero!</p>';
  }
}

document.getElementById('country-filter').addEventListener('change', e => {
  renderAcopio(e.target.value);
});

// Geocodificación gratuita por ciudad/país usando Nominatim (OpenStreetMap),
// solo si el usuario no puso coordenadas manualmente. No requiere API key.
async function geocode(ciudad, pais) {
  if (!navigator.onLine) return { lat: null, lng: null };
  try {
    const q = encodeURIComponent(`${ciudad ? ciudad + ', ' : ''}${pais}`);
    const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${q}`, {
      headers: { 'Accept-Language': 'es' },
    });
    const data = await res.json();
    if (data && data[0]) return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
  } catch (e) { /* sin red o falló: seguimos sin coordenadas */ }
  return { lat: null, lng: null };
}

// ================================================================
// MODAL — ACOPIO
// ================================================================
function openAcopioModal() {
  document.getElementById('acopio-modal').classList.add('open');
  document.getElementById('ac-nombre').focus();
}
function closeAcopioModal() {
  document.getElementById('acopio-modal').classList.remove('open');
}

['open-acopio-modal','open-acopio-modal-2'].forEach(id => {
  document.getElementById(id)?.addEventListener('click', openAcopioModal);
});
document.getElementById('cancel-acopio').addEventListener('click', closeAcopioModal);
document.querySelector('.modal-close').addEventListener('click', closeAcopioModal);
document.getElementById('acopio-modal').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeAcopioModal();
});
document.getElementById('acopio-modal').addEventListener('keydown', e => {
  if (e.key === 'Escape') closeAcopioModal();
});

document.getElementById('save-acopio').addEventListener('click', async () => {
  const nombre = document.getElementById('ac-nombre').value.trim();
  const pais   = document.getElementById('ac-pais').value;
  if (!nombre || !pais) {
    showToast('Por favor completa nombre y país.');
    return;
  }
  const saveBtn = document.getElementById('save-acopio');
  saveBtn.disabled = true;
  saveBtn.textContent = 'Guardando...';

  const ciudad = document.getElementById('ac-ciudad').value.trim();
  const { lat, lng } = await geocode(ciudad, pais);

  const ac = {
    id: `user-ac-${Date.now()}`,
    nombre, pais, ciudad,
    direccion: document.getElementById('ac-direccion').value.trim(),
    horario:   document.getElementById('ac-horario').value.trim(),
    contacto:  document.getElementById('ac-contacto').value.trim(),
    recibe:    document.getElementById('ac-recibe').value.trim(),
    by:        document.getElementById('ac-quien').value.trim() || 'Anónimo',
    lat, lng,
    ts: Date.now() / 1000,
  };

  DATA.acopio.push(ac);
  const stored = loadFromStorage(STORAGE_KEY_ACOPIO, []);
  stored.push(ac);
  saveToStorage(STORAGE_KEY_ACOPIO, stored);

  renderAcopio(document.getElementById('country-filter').value);

  if (firebaseReady && navigator.onLine) {
    db.collection('acopio').doc(ac.id).set(ac).then(() => {
      showToast('✓ Centro de acopio agregado y sincronizado. ¡Gracias!');
    }).catch(() => {
      queuePending({ type: 'acopio', ac, ts: Date.now() });
      showToast('✓ Guardado localmente. Se sincronizará cuando haya conexión estable.');
    });
  } else {
    queuePending({ type: 'acopio', ac, ts: Date.now() });
    showToast(firebaseReady
      ? '✓ Guardado sin conexión. Se sincronizará automáticamente.'
      : '✓ Centro agregado (modo local — configura Firebase para compartirlo con todos).');
  }

  closeAcopioModal();
  saveBtn.disabled = false;
  saveBtn.textContent = 'Guardar centro';

  ['ac-nombre','ac-pais','ac-ciudad','ac-direccion','ac-horario','ac-contacto','ac-recibe','ac-quien']
    .forEach(id => { document.getElementById(id).value = ''; });
});

// ================================================================
// HAMBURGER
// ================================================================
const navToggle = document.getElementById('nav-toggle');
const navLinks  = document.getElementById('nav-links');
navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ================================================================
// STATS
// ================================================================
function renderStats(stats) {
  const fmt = v => (v != null && v !== '') ? String(v) : '—';
  document.getElementById('stat-muertos').textContent  = fmt(stats.muertos);
  document.getElementById('stat-heridos').textContent  = fmt(stats.heridos);
  document.getElementById('stat-replicas').textContent = fmt(stats.replicas);
  const updEl = document.getElementById('stat-updated');
  if (updEl && stats.updated) updEl.textContent = `Actualizado: ${stats.updated}.`;
}

// ================================================================
// INSTALL PROMPT (PWA)
// ================================================================
let deferredInstallPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  if (!localStorage.getItem('ayuda_install_dismissed')) {
    document.getElementById('install-banner').classList.add('show');
  }
});
document.getElementById('install-btn')?.addEventListener('click', async () => {
  document.getElementById('install-banner').classList.remove('show');
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
  }
});
document.getElementById('dismiss-install')?.addEventListener('click', () => {
  document.getElementById('install-banner').classList.remove('show');
  localStorage.setItem('ayuda_install_dismissed', '1');
});

// ================================================================
// INIT
// ================================================================
async function init() {
  initFirebase();
  const stats = initData();
  renderStats(stats);
  renderItems('bebes');
  renderAcopio();
  updateOnlineStatus();

  if (firebaseReady) {
    await pullRemoteData();
    renderItems(currentGroup);
    renderAcopio(document.getElementById('country-filter').value);
    subscribeRealtime();
    flushPendingQueue();
  }
}

init();

// ================================================================
// SERVICE WORKER REGISTRATION
// ================================================================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(err => {
      console.warn('[Ayuda Solidaria] No se pudo registrar el Service Worker:', err);
    });
  });
}
