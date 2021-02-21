insert into users_category (id, category) values (1, "admin");
insert into users_category (id, category) values (2, "user");
insert into users (id, first_name, last_name, email, password, category_id, image_name) values (1, 'Jandy', 'Climar', 'jclimar0@google.ru', 'AbLCNvOMLd', 2, 'test');
insert into users (id, first_name, last_name, email, password, category_id, image_name) values (2, 'Ranna', 'Klaves', 'rklaves1@fema.gov', 'm3VhweqSX2', 1, '1E+02');
insert into users (id, first_name, last_name, email, password, category_id, image_name) values (3, 'Annetta', 'Hirschmann', 'ahirschmann2@craigslist.org', 'VrInNscXMn', false, '‪‪test‪');
insert into users (id, first_name, last_name, email, password, category_id, image_name) values (4, 'Anet', 'Vickress', 'avickress3@jugem.jp', 'jIYaNWt', 2, '˙ɐnbᴉlɐ ɐuƃɐɯ ǝɹolop ʇǝ ǝɹoqɐl ʇn ʇunpᴉpᴉɔuᴉ ɹodɯǝʇ poɯsnᴉǝ op pǝs ''ʇᴉlǝ ƃuᴉɔsᴉdᴉpɐ ɹnʇǝʇɔǝsuoɔ ''ʇǝɯɐ ʇᴉs ɹolop ɯnsdᴉ ɯǝɹo˥');
insert into users (id, first_name, last_name, email, password, category_id, image_name) values (5, 'Aloysia', 'McJury', 'amcjury4@example.com', '6FboOJRUIy', 2, '1E02');
insert into users (id, first_name, last_name, email, password, category_id, image_name) values (6, 'Pascale', 'Neligan', 'pneligan5@godaddy.com', 'jntRj24', 2, 'åß∂ƒ©˙∆˚¬…æ');
insert into users (id, first_name, last_name, email, password, category_id, image_name) values (7, 'Luke', 'Avramovitz', 'lavramovitz6@list-manage.com', 'tXQu9IfEI', 2, '・(￣∀￣)・:*:');
insert into users (id, first_name, last_name, email, password, category_id, image_name) values (8, 'Corilla', 'Banck', 'cbanck7@github.io', 'vnv5s0oMxp', 2, '<script>alert(''hi'')</script>');
insert into users (id, first_name, last_name, email, password, category_id, image_name) values (9, 'Ferdinand', 'Graysmark', 'fgraysmark8@hubpages.com', 'aH6GT1V', 2, '部落格');
insert into users (id, first_name, last_name, email, password, category_id, image_name) values (10, 'Danika', 'Hinge', 'dhinge9@cam.ac.uk', '2l2Sfehu', 2, '../../../../../../../../../../../etc/passwd%00');
insert into payment_method (id, method) values (1, 'credit_card');
insert into payment_method (id, method) values (2, 'debit_card');
insert into payment_method (id, method) values (3, 'bank_transfer');
insert into payment _method (id, method) values (4, 'cash');
insert into sales (id, user_id, payment_method_id, price, quantity) values (1, 1, 1, 22, 1);
insert into sales (id, user_id, payment_method_id, price, quantity) values (2, 2, 1, 57, 2);
insert into sales (id, user_id, payment_method_id, price, quantity) values (3, 3, 1, 95, 3);
insert into sales (id, user_id, payment_method_id, price, quantity) values (4, 3, 2, 31, 3);
insert into sales (id, user_id, payment_method_id, price, quantity) values (5, 1, 1, 82, 1);
insert into sales (id, user_id, payment_method_id, price, quantity) values (6, 4, 2, 92, 5);
insert into sales (id, user_id, payment_method_id, price, quantity) values (7, 8, 1, 22, 1);
insert into sales (id, user_id, payment_method_id, price, quantity) values (8, 10, 4, 67, 5);
insert into sales (id, user_id, payment_method_id, price, quantity) values (9, 9, 2, 43, 2);
insert into sales (id, user_id, payment_method_id, price, quantity) values (10, 7, 1, 58, 1);
insert into products (id, name, description, price, image_name, category, stock) values (1, 'Pizza Pizza Dough', 'test.jpg', 88, 'test.jpg﻿', 'Decorada', '2');
insert into products (id, name, description, price, image_name, category, stock) values (2, 'Spring Roll Wrappers', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 81, 'test.jpg', 'Clásica', '2');
insert into products (id, name, description, price, image_name, category, stock) values (3, 'Puree - Mango', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 6, 'test.jpg', 'Decorada', '1');
insert into products (id, name, description, price, image_name, category, stock) values (4, 'Chilli Paste, Sambal Oelek', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 9, 'test.jpg', 'Decorada', '3');
insert into products (id, name, description, price, image_name, category, stock) values (5, 'Thyme - Dried', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', 4, 'test.jpg', 'Clásica', '1');
insert into products (id, name, description, price, image_name, category, stock) values (6, 'Taro Root', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 76, 'test.jpg', 'Decorada', '2');
insert into products (id, name, description, price, image_name, category, stock) values (7, 'Syrup - Monin, Irish Cream', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 68, 'test.jpg', 'Clásica', '1');
insert into products (id, name, description, price, image_name, category, stock) values (8, 'Soup - Campbells Chicken', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', 36, 'test.jpg', 'Clásica', '3');
insert into products (id, name, description, price, image_name, category, stock) values (9, 'Wine - Sawmill Creek Autumn', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 77, 'test.jpg', 'Decorada', '1');
insert into products (id, name, description, price, image_name, category, stock) values (10, 'Pork - Chop, Frenched', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 21, 'test.jpg', 'Clásica', '1');
