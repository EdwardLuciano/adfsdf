import react from 'react';
import PaymentHeader from '../pages/merch/Header/MerchHeader';
import PaymentNavigation from '../Payment/Navigation/Navigation'

export default function Refund({ setCart, cart, getCartTotal, getTotalSum, removeFromCart }) {

return (
	<div>
	<PaymentHeader getCartTotal={getCartTotal} />
            
           
<h1 style={{color:'white',whiteSpace: 'pre-wrap',marginLeft: '5rem',marginRight: '5rem'}}>Возврат</h1>
<pre style={{color:'white',whiteSpace: 'pre-wrap',marginLeft: '5rem',marginRight: '5rem'}}>

{`СОГЛАСНО ЗАКОНУ РФ ОТ 07.02.1992 N 2300-1 (РЕД. ОТ 03.07.2016) “О ЗАЩИТЕ ПРАВ ПОТРЕБИТЕЛЕЙ” СТАТЬЯ 25. ВЫ МОЖЕТЕ ОБМЕНЯТЬ ТОВАР НАДЛЕЖАЩЕГО КАЧЕСТВА, ЕСЛИ:

- ТОВАР НЕ НАХОДИЛСЯ В УПОТРЕБЛЕНИИ
- СОХРАНЕНА ОРИГИНАЛЬНАЯ УПАКОВКА ТОВАРА, НЕ НАРУШЕНЫ ПЛОМБЫ И ФАБРИЧНЫЕ ЯРЛЫКИ
- ИМЕЮТСЯ ЧЕКИ, А ТАКЖЕ ИНЫЕ ДОКУМЕНТЫ, ПОДТВЕРЖДАЮЩИЕ ОПЛАТУ ТОВАРА
- СРОК С МОМЕНТА ПОКУПКИ НЕ ПРЕВЫСИЛ 14 КАЛЕНДАРНЫХ ДНЕЙ
- НИЖНЕЕ БЕЛЬЕ И ЧУЛОЧНО-НОСОЧНЫЕ ИЗДЕЛИЯ ОБМЕНУ И ВОЗВРАТУ НЕ ПОДЛЕЖАТ

КАК ОБМЕНЯТЬ ТОВАР:
ЗАТРАТЫ НА ЛОГИСТИКУ НЕ КОМПЕСИРУЮТСЯ, ЗАТРАТЫ НА ДОСТАВКУ ЛОЖАТСЯ НА ПОКУПАТЕЛЯ.

НАПИШИТЕ ПИСЬМО НА fred.bred.ea@yandex.ru
ВЕЩИ НЕОБХОДИМО ОТПРАВИТЬ НА ОБРАТНЫЙ АДРЕС (ВЫСЫЛАЕТСЯ ПО ТРЕБОВАНИЮ КЛИЕНТА), ВЛОЖИВ СОПУТСТВУЮЩЕЕ ПИСЬМО
ПОСЫЛКА ДОЛЖНА БЫТЬ ОТПРАВЛЕНА БЕЗ НАЛОЖЕННОГО ПЛАТЕЖА
Возврат переведенных средств, производится на ваш банковский счет в течение 14 рабочих дней (срок зависит от банка, который выдал вашу банковскую карту).`}

</pre>
</div>
);
}